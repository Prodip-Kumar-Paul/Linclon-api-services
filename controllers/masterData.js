import Domain from "../models/DomainModel.js";
import Skill from "../models/SkillModel.js";
import express from "express";

export const getDomains = async (req, res, next) => {
  try {
    const domains = await Domain.find({}).lean();
    // console.log(domains);

    res.status(200).json({
      message: "Domains Fetched Successfully",
      status: true,
      data: domains,
    });
  } catch (err) {
    next(err);
  }
};
export const getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find({}).lean();
    // console.log(domains);

    res.status(200).json({
      message: "Skills Fetched Successfully",
      status: true,
      data: skills,
    });
  } catch (err) {
    next(err);
  }
};
