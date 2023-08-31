import React from "react";
import "./GithubStarredUser.css";

const GithubStarredUser = ({ item }) => {
  return (
    <div className="starred-user-content" key={item.id}>
      <div className="user-profile">
        <img
          src={item.owner.avatar_url}
          className="user-avatar"
          alt={item.owner.name}
        />

        <div className="user-profile-info">
          <h2 className="user-profile-name">{item.full_name}</h2>

          <p className="user-profile-description">
            {item.description}
            <span> {item.url}</span>
          </p>

          <div className="user-profile-ratings">
            <div className="user-profile-stars">
              Stars: {item.stargazers_count}k
            </div>

            <div className="user-profile-issues">
              Issues: {item.open_issues_count}k
            </div>

            <div className="user-profile-submission">
              <span className="user-submission-text">
                Submitted 30 days ago by {item.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStarredUser;
