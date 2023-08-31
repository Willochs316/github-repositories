import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import StarredUser from "./StarredUser/StarredUser";
import "./StarredUsers.css";

const StarredUsers = ({ githubResponse, isLoading, isError, loadMore }) => {
  const onNext = () => {
    loadMore?.();
  };

  return isError ? (
    <div className="error-message">
      Oops! An error occurred. Please try again later.
    </div>
  ) : isLoading ? (
    <Box className="progressBar">
      <CircularProgress />
    </Box>
  ) : (
    <InfiniteScroll
      dataLength={githubResponse?.items}
      next={onNext}
      hasMore={githubResponse?.incomplete_results}
      loader={
        <Box className="progressBar">
          <CircularProgress />
        </Box>
      }
    >
      <div className="starred-users">
        <SearchBar githubResponse={githubResponse} />
        <div className="starred-user-container">
          {githubResponse?.items?.map((item) => (
            <StarredUser item={item} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default StarredUsers;
