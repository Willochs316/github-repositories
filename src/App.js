import React, { useEffect, useState } from "react";
import axios from "axios";
import GithubStarredList from "components/GithubStarredList/GithubStarredList";
import "./App.css";

const App = () => {
  const [githubResponse, setGithubResponse] = useState({
    total_count: 0,
    items: [],
    incomplete_results: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    try {
      const fetchItems = async () => {
        setIsError(false);
        currentPage === 1 && setIsLoading(true);
        const { data } = await axios.get(
          `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc/github&page=${currentPage}`
        );
        setGithubResponse((prev) => ({
          ...prev,
          ...data,
        }));
        currentPage === 1 && setIsLoading(false);
      };
      fetchItems();
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  }, [currentPage]);

  const loadMore = () => {
    githubResponse.incomplete_results && setCurrentPage((prev) => (prev += 1));
  };

  return (
    !isError && (
      <GithubStarredList
        isLoading={isLoading}
        githubResponse={githubResponse}
        loadMore={loadMore}
      />
    )
  );
};

export default App;
