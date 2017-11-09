import React from 'react';
import Chart from './components/chart';
import DateField from './components/date-field';
import DataFilter from './service/date-filter';
import weatherData from '../data/weather-data.json';
import weatherOptions from '../data/weather-options.json';
import './App.css';
import './components/form.css';

class App extends React.Component {
  constructor(args) {
    super(args);
    let lastYear = weatherData[weatherData.length-1]['yyyy'];
    let lastMonth = weatherData[weatherData.length-1]['month'];

    this.state = {
      from: {
        month: lastMonth,
        year: lastYear -1
      },
      to: {
        month: lastMonth,
        year: lastYear
      },
      selectedOption: weatherOptions[1]
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="title">Heathrow Weather Station</h1>
        </header>
        <Chart
          from={this.state.from}
          to={this.state.to}
          data={this.getFilteredData()}
          meta={this.state.selectedOption}
        />
        <form className="app-action">
          <div className="input-group">
            <DateField onChange={this.handleChangeFrom}
                       date={this.state.from}
                       label="From"/>
            <DateField onChange={this.handleChangeTo}
                       date={this.state.to}
                       label="To"/>
          </div>
          <div className="input-group">
            {this.createOptionGroup()}
          </div>
        </form>
        <footer className="app-footer">
          <p>
            made with heart by <a href="http://kevinjohne.me"> Kevin Johne</a>
          </p>
          <p>
            with help of <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> and <a href="https://frappe.github.io/charts/">Frappe Chart</a>
          </p>
        </footer>
      </div>
    );
  }

  handleChangeFrom = (e) => {
    let from = this.state.from;
    from[e.target.name] = Number(e.target.value);
    this.setState({ from: from });
  };

  handleChangeTo = (e) => {
    let to = this.state.to;
    to[e.target.name] = Number(e.target.value);
    this.setState({ to: to });
  };

  handleChangeWeatherOption = (e) => {
    let selectedOption = weatherOptions.filter((option) => option.value === e.target.value)[0];
    this.setState({
      selectedOption: selectedOption
    });
  };

  createOptionGroup() {
    return weatherOptions.map((option, index) => {
      return (
        <div className="input-row" key={index}>
          <input type="radio"
                 id={option.value}
                 name="weatherOption"
                 value={option.value}
                 onChange={this.handleChangeWeatherOption}
                 checked={option.value === this.state.selectedOption.value}/>
          <label htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      );
    }, this);
  }

  getFilteredData = () => {
    let data = DataFilter.filterByDate(weatherData, this.state.from, this.state.to);
    return DataFilter.filterByProperty(data, this.state.selectedOption.value);
  };
}

export default App;
