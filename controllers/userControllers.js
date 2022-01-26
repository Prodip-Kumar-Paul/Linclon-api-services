import axios from "axios";
import User from "../models/UserModel.js";
import apis from "../utils/apis.js";
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
      url: apis.USER_PROFILE_DETAILS,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    const user = await User.findOne({ _id: req.id }).lean();
    if (!user.githubId) {
      await User.updateMany(
        { _id: req.id },
        {
          githubId: response.data.id,
          githubUserName: response.data.login,
          githubNodeId: response.data.node_id,
        }
      ).lean();
    }

    res.status(200).json({
      message: "User Profile fetched successfully!",
      status: true,
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
      url: `${apis.USER_PROFILE_DETAILS}/followers`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    const user = await User.findOne({ _id: req.id }).lean();
    if (!user.githubId) {
      await User.updateMany(
        { _id: req.id },
        {
          githubId: response.data.id,
          githubUserName: response.data.login,
          githubNodeId: response.data.node_id,
        }
      ).lean();
    }

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
      url: `${apis.USER_PROFILE_DETAILS}/following`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });

    const user = await User.findOne({ _id: req.id }).lean();
    if (!user.githubId) {
      await User.updateMany(
        { _id: req.id },
        {
          githubId: response.data.id,
          githubUserName: response.data.login,
          githubNodeId: response.data.node_id,
        }
      ).lean();
    }

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
      url: `${apis.USER_PROFILE_DETAILS}/repos`,
      headers: {
        authorization: "Bearer " + req.githubToken,
      },
    });
    const user = await User.findOne({ _id: req.id }).lean();
    if (!user.githubId) {
      await User.updateMany(
        { _id: req.id },
        {
          githubId: response.data.id,
          githubUserName: response.data.login,
          githubNodeId: response.data.node_id,
        }
      ).lean();
    }

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
