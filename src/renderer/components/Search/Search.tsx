import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

import './Search.css';

function Search() {
  const [searchText, setSearchText] = useState<String>('');
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const InitiateSearch = () => {
    setSearchText('');
    console.log('Initiate Search');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      InitiateSearch();
    }
  };

  return (
    <div className={`mainSearch ${searchActive && 'active'}`}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="What do you want done?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyPress}
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
      />
      <FeatherIcon
        id="enter_icon"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(searchText.length > 0
          ? { onClick: () => InitiateSearch(), className: 'active' }
          : {})}
        icon="corner-down-left"
        size="16"
      />
    </div>
  );
}

export default Search;
