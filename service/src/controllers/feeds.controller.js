import { feedsRepository } from "../repositories";

export const getFeeds = (req, res) => {
  try {
    console.log(req.query)
    const { search = "", topic = "" } = req.query;
    const results = feedsRepository.getFeeds(search, topic);
    res.status(200).json({
      statusCode: 200,
      message: "get feeds success.",
      error: null,
      data: results,
    });
  } catch (error) {
    console.log({error})
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error.",
      error,
      data: null,
    });
  }
};
