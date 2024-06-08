// import fs from "fs";
// import dotenv from "dotenv";
// dotenv.config();

// const env = process.env.NODE_ENV || "development";

// const envConfig = dotenv.parse(fs.readFileSync(`.env.${env}`));

// for (const k in envConfig) {
//   process.env[k] = envConfig[k];
// }

// export default function updateJsonEnv() {
//   const env = process.env.NODE_ENV || "development";
//   const devJSON = fs.readFileSync(`config/${env}.json`, "utf8");

//   const data = JSON.parse(devJSON);

//   data.e = process.env.DEV_EMAIL_SERVICE;

//   fs.writeFileSync(`config/${env}.json`, JSON.stringify(data, null, 2));
// }
