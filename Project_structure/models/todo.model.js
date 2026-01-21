import fs from "fs/promises";
import path from "path";

const DB_PATH = path.resolve("db.json");

export const getDB = async () => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
};

export const saveDB = async (data) => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
};
