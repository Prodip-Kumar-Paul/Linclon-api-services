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

      await User.updateMany(
         { _id: req.id },
         {
            githubId: response.data.id,
            githubUserName: response.data.login,
            githubNodeId: response.data.node_id,
         }
      );

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

// export const getFollowersDetails = async (req, res, next) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: apis.FOLLOWERS_DETAILS,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of the followers of  a user",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getFollowingsDetails = async (req, res, next) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: apis.FOLLOWING_DETAILS,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of the followings of  a user",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getAllRepoDetails = async (req, res, next) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: apis.USER_ALL_REPO_DETAILS,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the repos of a user",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

//Particular repo details

// export const getParticularRepo = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of a particular repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getCollaboratorsDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/collaborators`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the collaborators in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getIssuesDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/issues`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the issues in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getLanguagesDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/languages`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the languages in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getContributorsDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/contributors`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the contributors in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getCommitsDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/commits`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the commits in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getPRsDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/pulls`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the PRs in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getContentsDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/contents`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of all the contents in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// export const getReadmeDetails = async (req, res, next) => {
//   try {
//     const id=req.body;
//     const {projectName}= req.body;
//     const user = await User.find({githubId:id})
//       if(!user)
//       {
//         const error = new Error("No user found");
//          error.statusCode = 400;
//          throw error;
//       }

//     const response = await axios({
//       method: "get",
//       url: `${apis.REPO_BASE_DETAILS}/${user.githubUserName}/${projectName}/main/README.md`,
//       headers: req.githubToken,
//     });

//     res.status(200).json({
//       status: true,
//       message: "Get details of README in the repo",
//       data: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };
