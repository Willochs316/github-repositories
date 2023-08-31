import React, { useState } from "react";
import Button from "../Commons/Button";
import UserIcons from "../Commons/Icons";
import Input from "../Commons/Input";
import { FaTimes } from "react-icons/fa";
import "./Search.css";

const SearchBar = ({ githubResponse }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [wordEntered, setwordEntered] = useState("");

  const handleFilteredItems = (event) => {
    const searchWord = event.target.value;
    setwordEntered(searchWord);
    const newFilteredItems = githubResponse?.items?.filter((item) => {
      return item.html_url.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      return setFilteredItems([]);
    } else {
      setFilteredItems(newFilteredItems);
    }
  };

  const clearInput = () => {
    setFilteredItems([]);
    setwordEntered("");
  };
  return (
    <div className="search-container">
      <div className="input-container">
        <Input
          className="em-input"
          value={wordEntered}
          onChange={handleFilteredItems}
          placeholder="Search...."
        />
        {filteredItems.length === 0 ? (
          <Button className="input-button" title="Search" type="submit" />
        ) : (
          <UserIcons
            icons={FaTimes}
            className="clearBtn"
            onClick={clearInput}
          />
        )}
      </div>

      {filteredItems.length !== 0 && (
        <div className="githubResponseData">
          {filteredItems.slice(0, 5).map((item) => (
            <a
              className="starred-user-items"
              href={item.html_url}
              target="true"
              key={item.id}
            >
              <p>{item.full_name}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
