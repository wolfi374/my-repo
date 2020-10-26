import React, { useState } from 'react';
import SearchInput from './components/search-input';
import FiltersBlock from './components/filters-block';
import CardsBlock from './components/cards-block';
import './css/App.scss';

const App = () => {
  const [searchInputText, setSearchInputText] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput
          onChange={setSearchInputText}
        />
        <FiltersBlock
          onChangeGenderFilter={setGenderFilter}
        />
      </header>
      <main>
        <article>
          <CardsBlock
            searchText={searchInputText}
            genderFilter={genderFilter}
          />
        </article>
      </main>
    </div>
  );
}

export default App;
