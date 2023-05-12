import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../../App.css"

import "../../Styles/CustomerAffairs/SearchInstructor.css"

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="instsearchbar">
      
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <AiOutlineSearch className="i" id="icon_position" />
    </div>
  );
};