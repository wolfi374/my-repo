import React, { useState } from 'react';
import SearchInput from './components/search-input';
import FiltersBlock from './components/filters-block';
import CardsBlock from './components/cards-block';
import './css/App.scss';

const App = () => {
  const [searchInputText, setSearchInputText] = useState('');

  // console.log(searchInputText);

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput
          onChange={setSearchInputText}
        />
        <FiltersBlock />
      </header>
      <main>
        <article>
          <CardsBlock
            searchText={searchInputText}
          />
        </article>
      </main>
    </div>
  );
}

export default App;
