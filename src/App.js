import './css/App.scss';
import SearchInput from './components/search-input';
import RadioInput from './ui-kit/radio-input'
import CheckboxInput from './ui-kit/checkbox-input';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <div className="filters-block">
          <div className="gender-filter-container">
            <div className="gender-filter-title">Фильтр по полу</div>
            <RadioInput
              text="Все"
              value="all"
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
            <div className="age-filter-checkboxes-block">
              <CheckboxInput
                value="0-18"
              />
              <CheckboxInput
                value="18-35"
              />
              <CheckboxInput
                value="35-65"
              />
              <CheckboxInput
                value="65+"
              />
            </div>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
