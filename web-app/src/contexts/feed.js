import { useEffect, useState, createContext } from "react";

const BASE_URL = "http://localhost:4000/api/v1";
const DEFAULT_PATH = "/feeds?topic=news"

export const FeedsContext = createContext();

export const FeedsProvider = ({ children }) => {
  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFeeds(DEFAULT_PATH);
  }, []);

  const getFeeds = (path) => {
    fetch(`${BASE_URL}${path}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFeeds(data.data);
        setLoading(false);
      });
  };

  return (
    <FeedsContext.Provider
      value={{
        feeds,
        loading,
        getFeeds,
      }}
    >
      {children}
    </FeedsContext.Provider>
  );
};
