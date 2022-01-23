import axios from "axios";
import { allApis } from "../utils/apis.js";
export const gitControllers = async (req, res, next) => {
  try {
    console.log("here......");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getUserDetails = async (req, res, next) => {
  try {
    const response = await axios({
      method: "get",
      url: allApis.USER_PROFILE_DETAILS,
      headers: req.headers.authorization,
    });

    res.status(200).json({
      status: true,
      message: "Get details of a user",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getFollowersDetails = async (req, res, next) => {
  try {
    const response = await axios({
      method: "get",
      url: allApis.FOLLOWERS_DETAILS,
      headers: req.headers.authorization,
    });

    res.status(200).json({
      status: true,
      message: "Get details of the followers of  a user",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getFollowingsDetails = async (req, res, next) => {
  try {
    const response = await axios({
      method: "get",
      url: allApis.FOLLOWING_DETAILS,
      headers: req.headers.authorization,
    });

    res.status(200).json({
      status: true,
      message: "Get details of the followings of  a user",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getAllRepoDetails = async (req, res, next) => {
  try {
    const response = await axios({
      method: "get",
      url: allApis.USER_ALL_REPO_DETAILS,
      headers: req.headers.authorization,
    });

    res.status(200).json({
      status: true,
      message: "Get details of all the repos of a user",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//Particular repo details

export const getParticularRepo = async (req, res, next) => {
  try {
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.PARTICULAR_REPO_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.COLLABORATORS_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.ISSUES_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.LANGUAGES_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.CONTRIBUTORS_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.COMMITS_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.PRS_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.CONTENTS_DETAILS,
      headers: req.headers.authorization,
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
    const response = await axios({
      method: "get",
      url: allApis.particular_repo_details.README_DETAILS,
      headers: req.headers.authorization,
    });

    res.status(200).json({
      status: true,
      message: "Get details of README in the repo",
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
