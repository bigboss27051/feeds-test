import fs from "fs";
import path from "path";

export const getFeeds = (search = "", topic = "") => {
  const __dirname = path.resolve();
  const rawdata = fs.readFileSync(path.resolve(__dirname, "./src/data.json"));
  let feeds = JSON.parse(rawdata);

  if (search !== "") {
    feeds = [
      ...feeds.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      }),
    ];
  }
  if (topic !== "") {
    feeds = [...feeds.filter((item) => item.type === topic)];
  }
  return feeds;
};
