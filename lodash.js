var _ = require('lodash');


var studentsOfDoom = [
        {
            "name": "Bern",
            "lairs": [{"name":"Washington"}, {"name": "Vermont"}, {"name": "Brooklyn"}]
        },
        {
            "name": "Hillary",
            "lairs": [{"name":"Washington"}, {"name": "New York"}, {"name": "Arkansas"}]
        },
        {
            "name": "Trump",
            "lairs": [{"name":"New York"}]
        },
        {
            "name": "Cruz",
            "lairs": [{"name": "Washington"}, {"name": "New York"}]
        }
    ]


var lairs = _.map(studentsOfDoom, function(candidate){
    return _.map(candidate.lairs, function(lair){
        return lair.name;
    });
});

var flattenedLairs = _.flatten(lairs);
var uniqueLairs = _.uniq(flattenedLairs);
var sortedLairs = uniqueLairs.sort();

console.log(sortedLairs);