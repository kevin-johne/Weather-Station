import React from 'react';
import FrappeChart from 'frappe-charts/dist/frappe-charts.min.cjs';
import 'frappe-charts/dist/frappe-charts.min.css';
import './chart.css';

class Chart extends React.Component {
  constructor(args) {
    super(args);

    let [labels, values] = this.spreadData();

    this.chartConfig = {
      parent: '.chart__object',
      data: {
        labels: labels,
        datasets: [
          {
            color: 'black',
            title: this.props.meta.label,
            values: values
          }
        ]
      },
      type: 'line',
      show_dots: 0,
      height: 300,
      x_axis_mode: 'span',
      is_series: 1
    };
  }
  render() {
    return (
      <div className="chart">
        <span className="chart__label-y">{this.props.meta.label}</span>
        <div className="chart__object">
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.frappeChart = new FrappeChart(this.chartConfig);
  }

  componentDidUpdate() {
    let [labels, values] = this.spreadData();
    this.frappeChart.update_values(
        [
          {values: values}
        ],
        labels
    );
  }

  spreadData() {
    let labels = [];
    let values = [];
    this.props.data.forEach((data) => {
      labels.push(data['key']);
      values.push(data['value']);
    });

    return [labels, values];
  }
}

export default Chart;