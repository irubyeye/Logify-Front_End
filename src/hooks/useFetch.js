import { useState } from "react";
export const useFetch = (callback) => {
  const [isPostsLoading, setIsLoading] = useState(false);
  const [postError, setPostError] = useState();

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error) {
      setPostError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isPostsLoading, postError];
};
