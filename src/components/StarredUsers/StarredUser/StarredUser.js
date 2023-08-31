import React from "react";
import "./StarredUser.css";

const StarredUser = ({ item }) => {
  return (
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
            <div className="starred-rate">Stars: {item.stargazers_count}k</div>

            <div className="issue-rate">Issues: {item.open_issues_count}k</div>

            <div className="rate-content">
              <span className="rate-text">
                Submitted 30 days ago by {item.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarredUser;
