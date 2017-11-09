import React from 'react';
import weatherData from '../../data/weather-data.json';
import './date-field.css';

class DateField extends React.Component {
  getMonthOptions() {
    let MonthsOptions = [];
    for(let count = 12; count >= 1; count--) {
      let option = (
        <option value={count}
                key={count}>
          {count}
        </option>
      );
      MonthsOptions.push(option);
    }
    return MonthsOptions;
  }

  getYearOptions() {
    let YearOptions = [];
    for(let count = weatherData[weatherData.length-1]['yyyy']; count >= weatherData[0]['yyyy']; count--) {
      let option = (
        <option value={count}
                key={count}>
          {count}
        </option>
      );
      YearOptions.push(option);
    }
    return YearOptions;
  }

  render() {
    return (
      <div className="input-row date-field">
        <div className="date-field__select-group">
          <select className="date-field__select"
                  name="month"
                  id={this.props.label}
                  onChange={this.props.onChange}
                  defaultValue={this.props.date.month}>
            {this.getMonthOptions(this.props.date.month)}
          </select>
          <select className="date-field__select"
                  name="year"
                  onChange={this.props.onChange}
                  defaultValue={this.props.date.year}>
            {this.getYearOptions(this.props.date.year)}
          </select>
        </div>
        <label className="date-field__label"
               htmlFor={this.props.label}>{this.props.label}</label>
      </div>
    );
  }
}

export default DateField;