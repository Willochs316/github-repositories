import React, { useState } from "react";
import Button from "components/Commons/Button";
import UserIcons from "components/Commons/Icons";
import Input from "components/Commons/Input";
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
    <section className="search-section">
      <div className="search-input-section">
        <Input
          className="search-input"
          value={wordEntered}
          onChange={handleFilteredItems}
          placeholder="Search...."
        />
        {filteredItems.length === 0 ? (
          <Button className="search-button" title="Search" type="submit" />
        ) : (
          <UserIcons
            icons={FaTimes}
            className="clear-button"
            onClick={clearInput}
          />
        )}
      </div>

      {filteredItems.length !== 0 && (
        <div className="search-results">
          {filteredItems.slice(0, 5).map((item) => (
            <a
              className="search-result-item"
              href={item.html_url}
              target="true"
              key={item.id}
            >
              <p>{item.full_name}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
