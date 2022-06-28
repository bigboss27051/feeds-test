import React from "react";
import CardList from "../components/CardList";
import Spinner from "../components/Spinner";
import { useFeeds } from "../hooks/useFeeds";

const Home = () => {
  const { feeds, loading } = useFeeds();
  return (
    <div>
      {loading && <Spinner />}
      {!loading && feeds && <CardList data={feeds} />}
    </div>
  );
};

export default Home;
