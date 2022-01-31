import axios from "axios";
import User from "../../models/UserModel.js";
import apis from "../../utils/apis.js";

export const getParticularRepo = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    // console.log(req.id);
    const user = await User.findOne({ _id: req.id }).lean();
    // console.log(user);
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of a particular repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getCollaboratorsDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/collaborators`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the collaborators in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getIssuesDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/issues`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the issues in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getLanguagesDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/languages`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the languages in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getContributorsDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/contributors`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the contributors in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getCommitsDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/commits`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the commits in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getPRsDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/pulls`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the PRs in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getContentsDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const response = await axios({
      method: "get",
      url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/contents`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the contents in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getReadmeDetails = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 400;
      throw error;
    }

    const resp = await axios({
      method: "get",
      url: `${apis.README_DETAILS}/${user.githubUserName}/${projectName}/main/README.md`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get details of README in the repo",
      data: resp.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
