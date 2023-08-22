import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
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
    <div className="starred-users">
      <SearchBar githubResponse={githubResponse} />

      <div className="starred-users-container">
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
          {githubResponse?.items?.map((item) => (
            <div className="starred-user-content" key={item.id}>
              <div className="user-profile-container">
                <img
                  src={item.owner.avatar_url}
                  className="user-icon"
                  alt={item.owner.name}
                />

                <div className="starred-user-information">
                  <h2 className="starred-user-header">{item.full_name}</h2>

                  <p className="starred-user-details">
                    {item.description}
                    <span> {item.url}</span>
                  </p>

                  <div className="starred-user-rate">
                    <div className="starred-rate">
                      Stars: {item.stargazers_count}k
                    </div>

                    <div className="issue-rate">
                      Issues: {item.open_issues_count}k
                    </div>

                    <div className="rate-content">
                      <span className="rate-text">
                        Submitted 30 days ago by {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default StarredUsers;
