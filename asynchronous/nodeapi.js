import { readFile } from "fs";

readFile("./sample.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const sapa = data
    .toString()
    .replace("%name%", "World")
    .replace("%your_name%", "Ukhasyah");

  console.log(sapa);
});
