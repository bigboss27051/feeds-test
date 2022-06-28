import { feedsController } from "../controllers";

export default (router) => {
  router.get("/feeds", feedsController.getFeeds);
};
