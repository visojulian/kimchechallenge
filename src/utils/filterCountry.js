var _ = require('lodash');

const filterCountry = (countries, searchFilter) => {
    return _.filter(countries, function (c) { return _.includes(_.toLower(c.name), _.toLower(searchFilter)) })
};

export default filterCountry;