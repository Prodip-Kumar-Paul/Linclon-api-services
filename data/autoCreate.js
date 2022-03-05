import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { Skill } from "../../models/SkillModel.js";
import { Domain } from "../../models/DomainModel.js";

export const checkData = (req, res, next) => {
  checkDomaindata();
  checkSkilldata();
};

const checkDomaindata = async (req, res, next) => {
  try {
    const domainDatabase = await Domain.find({});
    if (domainDatabase.length>0) {
      console.log("domain data prsenet");
    } else {
      //   console.log("domain data not present");

      const domainAuto = readFileSync(
        path.join(__dirname, "domain.json"),
        "utf8"
      );

    //   console.log(domainAuto.domainData);
      const d = JSON.parse(domainAuto);
        // console.log(d.domainData.length);
      const obj = {
        domainData: [],
      };
      for (let i = 0; i <d.domainData.length; i++) {
        obj.domainData.push({
          _id: d.domainData[i]._id,
          name: d.domainData[i].name,
        });
      }
        // console.log(obj);
      Domain.insertMany([
        { _id: obj.domainData[0]._id, name: obj.domainData[0].name },
        { _id: obj.domainData[1]._id, name: obj.domainData[1].name },
      ])
        .then(function () {
          console.log("Domain Data inserted"); // Success
        })
        .catch(function (error) {
          console.log(error); // Failure
        });
       
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
const checkSkilldata = async (req, res, next) => {
    try {
        const skillDatabase = await Skill.find({});
        if (skillDatabase.length>0) {
          console.log("skill data prsenet");
        } else {
          //   console.log("domain data not present");
    
          const skillAuto = readFileSync(
            path.join(__dirname, "skill.json"),
            "utf8"
          );
    
        //   console.log(domainAuto.domainData);
          const s = JSON.parse(skillAuto);
            // console.log(s.skillData.length);
          const obj = {
            skillData: [],
          };
          for (let i = 0; i <s.skillData.length; i++) {
            obj.skillData.push({
              _id: s.skillData[i]._id,
              name: s.skillData[i].name,
            });
          }
            // console.log(obj);
          Skill.insertMany([
            { _id: obj.skillData[0]._id, name: obj.skillData[0].name },
            { _id: obj.skillData[1]._id, name: obj.skillData[1].name },
            { _id: obj.skillData[2]._id, name: obj.skillData[2].name },
            { _id: obj.skillData[3]._id, name: obj.skillData[3].name },
            { _id: obj.skillData[4]._id, name: obj.skillData[4].name },
          ])
            .then(function () {
              console.log("Skil Data inserted"); // Success
            })
            .catch(function (error) {
              console.log(error); // Failure
            });
           
        }
      } catch (err) {
        console.log(err);
        next(err);
      }
};
