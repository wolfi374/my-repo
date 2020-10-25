import './css/App.scss';
import SearchInput from './components/search-input';
import RadioInput from './ui-kit/radio-input'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <div className="gender-filter-container">
          <div className="gender-filter-title">Фильтр по полу</div>
          <RadioInput
            text="Все"
            value="all"
            name="gender"
          />
          <RadioInput
            text="Только женщины"
            value="female"
            name="gender"
          />
          <RadioInput
            text="Только мужчины"
            value="male"
            name="gender"
          />
        </div>
        <div className="age-filter-container">
          <div className="age-filter-title">Фильтр по возрастным группам</div>
          <RadioInput
            text="Все"
            value="all"
            name="gender"
          />
          <RadioInput
            text="Только женщины"
            value="female"
            name="gender"
          />
          <RadioInput
            text="Только мужчины"
            value="male"
            name="gender"
          />
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
