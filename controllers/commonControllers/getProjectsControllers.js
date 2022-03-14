
import Project from "../../models/ProjectModel.js";
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
