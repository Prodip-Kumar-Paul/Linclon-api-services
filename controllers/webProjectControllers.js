import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";
import axios from "axios";
import apis from "../utils/apis.js";
export const postProject = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { description } = req.body;
    const { teamSize } = req.body;
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    // console.log(user);
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }
    //getting perticular repodetails
    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });
    const alreadyPresent = await Project.find({
      githubId: response.data.id,
    }).lean();
    // console.log(alreadyPresent.length);
    if (alreadyPresent.length === 1 && (response.data.isDeleted)==false) {
      const err = new Error("Already Submitted");
      err.statusCode = 409;
      throw err;
    }
    const post = new Project({
      name: name,
      description: description,
      teamSize: teamSize,
      ownerId: user.githubId,
      githubDetails: response.data,
      githubId: response.data.id,
    });
    post.save().then((result) => {
      res.status(201).json({
        status: true,
        message: "Created project successfully.",
        data: result,
      });
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getAllProjects = async (req, res, next) => {
  await Project.find({isDeleted:false})
    .then((posts) => {
      res.status(200).json({
        message: "All Projects Fetched Successfully",
        status: true,
        data: posts,
      });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const getParticularProject = async (req, res, next) => {
  const id = req.params.id;
  await Project.findById(id)
    .then((post) => {
      if (!post) {
        const err = new Error("No Post Found");
        err.statusCode = 404;
        throw err;
      }
      res.status(200).json({
        message: "Particular Project Fetched Successfully",
        status: true,
        data: post,
      });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const updateProject = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, teamSize } = req.body;
  await Project.findById(id)
    .then((post) => {
      if (!post) {
        const err = new Error("No Post Found");
        err.statusCode = 404;
        throw err;
      }
      // console.log(teamSize.length);
      (post.name = name),
        (post.description = description),
        (post.teamSize = teamSize);
      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Project Updated Successfully",
        status: true,
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const deleteProject = async (req, res, next) => {
  const id = req.params.id;
  await Project.findById(id)
    .then((post) => {
      if (!post) {
        const err = new Error("No Post Found");
        err.statusCode = 404;
        throw err;
      }
      if(post.isDeleted==true)
      {
         const err = new Error("No Post Found");
        err.statusCode = 404;
        throw err;
      }
      post.isDeleted=true;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Project Deleted Successfully",
        status: true,
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
