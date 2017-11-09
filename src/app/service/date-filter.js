function filterByDate(data, from, to) {
  let filteredData = [];
  if (isArrayLike(data)) {

    for (let i = 0; i < data.length; i++) {
      let entry = data[i];
      const year = Number(entry['yyyy']);
      const month = Number(entry['month']);
      if (year < from.year || (year === from.year && month < from.month)) {
        continue;
      }

      if (year > to.year || (year === to.year && month > to.month)) {
        break;
      }

      filteredData.push(entry);
    }
  }
  return filteredData;
}

function filterByProperty(data, property) {
  if (isArrayLike(data)) {
    return data.map(entry => {
      return {
        value: entry[property],
        key: entry['yyyy'] + ' ' + entry['month']
      }
    });
  }
  return [];
}

function isArrayLike(object) {
  if (object.nodeType === 1 && object.length) {
    return true;
  }

  if (typeof object.length === "number" && object.length > 0 && ( object.length - 1 ) in object) {
    return true;
  }

  return object instanceof Array || object.length === 0;
}

export default {isArrayLike, filterByProperty, filterByDate};
