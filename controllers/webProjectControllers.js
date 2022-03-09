import Project from "../models/ProjectModel.js";
import Domain from "../models/DomainModel.js";
import User from "../models/UserModel.js";
import axios from "axios";
import apis from "../utils/apis.js";
export const postProject = async (req, res, next) => {
  try {
    const {
      name,
      description,
      teamSize,
      projectName,
      domains,
      skills,
      urgency,
    } = req.body;

    const user = await User.findOne({ _id: req.id }).lean();
    // console.log(user);
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }
    //find all the repos of the user
    const repos = await axios({
      method: "get",
      url: `${apis.USER_PROFILE_DETAILS}/repos`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });
    let found = 0;
    //checking if the projectname is present in the repos of the user else throw an err
    repos.data.forEach(async (element) => {
      if (element.name === projectName) found = 1;
    });
    if (found === 0) {
      const err = new Error("No Project Found");
      err.statusCode = 404;
      throw err;
    }
    //getting perticular repodetails
    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    //  console.log(response.data);
    // console.log("Here is data field"+response.data);
    const alreadyPresent = await Project.find({
      githubId: response.data.id,
    }).lean();
    // console.log(response.data);
    if (alreadyPresent.length > 0 && alreadyPresent[0].isDeleted == false) {
      const err = new Error("Already Submitted");
      err.statusCode = 409;
      throw err;
    }
    const post = new Project({
      name: name,
      description: description,
      teamSize: teamSize,
      // tags: tags,
      domains,
      skills,
      urgency: urgency,
      ownerId: user.githubId,
      githubDetails: response.data,
      githubId: response.data.id,
    });
    const result = await post.save();
    res.status(201).json({
      status: true,
      message: "Created project successfully.",
      data: result,
    });
  } catch (err) {
    console.log("data is" + err.data);
    next(err);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    const posts = await Project.find({ isDeleted: false });
    // console.log(posts);
    res.status(200).json({
      message: "All Projects Fetched Successfully",
      status: true,
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

export const getParticularProject = async (req, res, next) => {
  try {
    const { projectId } = req.query;
    console.log(projectId);
    const post = await Project.findOne({
      _id: projectId,
      isDeleted: false,
    }).populate("domains");

    res.status(200).json({
      message: "Particular Project Fetched Successfully",
      status: true,
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, description, teamSize, tags, urgency } = req.body;

    const post = await Project.findOne({ _id: id, isDeleted: false });

    console.log(post);

    // console.log(teamSize.length);

    if (!post) {
      const error = new Error("No post found");
      error.statusCode = 400;
      throw error;
    }
    post.name = name;
    post.description = description;
    post.teamSize = teamSize;
    post.urgency = urgency;
    post.tags = tags;
    const result = await post.save();
    // console.log(result);
    res.status(200).json({
      message: "Project Updated Successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Project.findOne({ _id: id, isDeleted: false });

    post.isDeleted = true;
    const result = await post.save();

    res.status(200).json({
      message: "Project Deleted Successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
