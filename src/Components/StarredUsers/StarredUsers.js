import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import './StarredUsers.css';

const StarredUsers = ({ githubResponse, currentPage, isLoading, loadMore }) => {
  const onNext = () => {
    loadMore?.();
  };

  return isLoading ? (
    <Box className='progressBar'>
      <CircularProgress />
    </Box>
  ) : (
    <div className='starred-users mt-3'>
      <SearchBar githubResponse={githubResponse} />

      <div className='starred-users-container'>
        <InfiniteScroll
          dataLength={githubResponse?.items}
          next={onNext}
          hasMore={githubResponse?.incomplete_results}
          loader={
            <Box className='progressBar'>
              <CircularProgress />
            </Box>
          }
        >
          {githubResponse?.items?.map((item) => (
            <div className='starred-user-content' key={item.id}>
              <div className='user-profile-container'>
                <div className='user-profile-image'>
                  <img
                    src={item.owner.avatar_url}
                    className='user-icon'
                    alt={item.owner.name}
                  />
                </div>

                <div className='starred-user-information'>
                  <div className='starred-user-header-container'>
                    <h2 className='starred-user-header'>{item.full_name}</h2>
                  </div>

                  <div className='starred-user-details'>
                    <p className='starred-user-detail-content'>
                      {item.description}
                      <span> {item.url}</span>
                    </p>
                  </div>

                  <div className='starred-user-rate'>
                    <div className='starred-rate'>
                      Stars: {item.stargazers_count}k
                    </div>

                    <div className='issue-rate'>
                      Issues: {item.open_issues_count}k
                    </div>

                    <div className='rate-content'>
                      <span className='rate-text'>
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
