import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import Domain from "../../models/DomainModel.js";

export const autoDomain = async (req, res, next) => {
   try {
      const domains = await Domain.find({ isDeleted: false }).lean();
      if (!domains.length) {
         let data = readFileSync(
            path.join(__dirname, "masterData.json"),
            "utf8"
         );
         data = JSON.parse(data);
         //  console.log(data.domainData);
         const allDomains = [];
         data.domainData.forEach(async (ele) => {
            const obj = {
               name: ele.name,
               description: ele.description,
               imageUrl: ele.image,
            };
            allDomains.push(obj);
         });
         await Domain.insertMany(allDomains);
         console.log("Domains created");
      } else {
         console.log("Domains already present");
      }
   } catch (err) {
      console.log(err);
   }
};
