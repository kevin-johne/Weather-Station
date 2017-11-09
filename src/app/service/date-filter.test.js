import dateFilter from './date-filter';

it('is array like', () => {
  expect(dateFilter.isArrayLike([]) === true);
  expect(dateFilter.isArrayLike({'test':'array','test2': function(){}}) === true);
  expect(dateFilter.isArrayLike('') === false);
  expect(dateFilter.isArrayLike(function(){}) === false);
});

describe('filtering', () => {
  let testData = [
    {
      "air_frost": "10",
      "month": "1",
      "rain_mm": "64.3",
      "sunshine_hours": "40.1",
      "tmax_C": "6.8",
      "tmin_C": "0.9",
      "yyyy": "1958"
    },
    {
      "air_frost": "10",
      "month": "2",
      "rain_mm": "58.7",
      "sunshine_hours": "45.7",
      "tmax_C": "8.9",
      "tmin_C": "1.9",
      "yyyy": "2000"
    },
    {
      "air_frost": "10",
      "month": "3",
      "rain_mm": "26",
      "sunshine_hours": "105.2",
      "tmax_C": "8.1",
      "tmin_C": "1.1",
      "yyyy": "2015"
    },
  ];

  it('date filter should return one entry', () => {
    let from = {month: 1, year: 1957};
    let to = {month: 1, year: 1960};
    expect(dateFilter.filterByDate(testData, from, to).length).toBe(1);
  });

  it('date filter should return none entry', () => {
    let from = {month: 1, year: 1900};
    let to = {month: 1, year: 1910};
    expect(dateFilter.filterByDate(testData, from, to).length).toBe(0);
  });

  it('data filter should return rain_mm', () => {
    let filtered = dateFilter.filterByProperty(testData, 'rain_mm');
    expect(filtered.length).toBe(3);
    expect(filtered[0]['value']).toBe(testData[0]['rain_mm']);
  });
});
