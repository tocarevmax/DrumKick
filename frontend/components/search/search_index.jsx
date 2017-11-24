import React from 'react';


const SearchIndex = ({search, changeUISearch}) => {

  const handleUIChange = () => {
    changeUISearch(false);
  };

  if (!search.artists) {
    return (<h1>Nothing to render</h1>);
  }
  return (
    <div>
      <h1>Search Results</h1>
      <h3>Artists:</h3>
      <ul>
        {search.artists.map((artist, idx) => (
          <li key={`artists-key-${idx}`} onClick={handleUIChange}>{artist.name}</li>
        ))}
      </ul>

      <h3>Concerts:</h3>
      <ul>
        {search.concerts.map((concert, idx) => (
          <li key={`concerts-key-${idx}`}>{concert.name}</li>
        ))}
      </ul>

    </div>
  );
};

export default SearchIndex;
