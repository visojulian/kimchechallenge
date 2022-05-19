var _ = require('lodash');

const filterByLanguage = (countries, language) => {
    return _.filter(countries, function (c) { return _.find(c.languages, language) })
}

export default filterByLanguage;