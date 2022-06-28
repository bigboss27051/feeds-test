import { useContext } from 'react';
import { FeedsContext } from '../contexts/feed';

export const useFeeds = () => {
  const feedsContext = useContext(FeedsContext)
  return feedsContext
};

