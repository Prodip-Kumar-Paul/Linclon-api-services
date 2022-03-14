import Project from "../models/ProjectModel.js";
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

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    const alreadyPresent = await Project.find({
      githubId: response.data.id,
      isDeleted: false,
    }).lean();
    // console.log(response.data);
    if (alreadyPresent.length > 0) {
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
    next(err);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, description, teamSize, domains, skills, urgency } = req.body;

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
    post.domains = domains;
    post.skills = skills;
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
