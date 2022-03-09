import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import Skill from "../../models/SkillModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const autoSkill = async (req, res, next) => {
    try {
       const skills = await Skill.find({ isDeleted: false }).lean();
       if (!skills.length) {
          let data = readFileSync(
             path.join(__dirname, "masterData.json"),
             "utf8"
          );
          data = JSON.parse(data);
          //  console.log(data.domainData);
          const allSkills = [];
          data.skillData.forEach(async (ele) => {
             const obj = {
                name: ele.name,
                description: ele.description,
               
             };
             allSkills.push(obj);
          });
          await Skill.insertMany(allSkills);
          console.log("Skills created");
       } else {
          console.log("Skills already present");
       }
    } catch (err) {
       console.log(err);
    }
 };
