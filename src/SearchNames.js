import React, { useState, useEffect } from "react";

const SearchNames = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setNames(data.results);
      });
  }, []);
  return <div>SearchNames</div>;
};

export default SearchNames;
