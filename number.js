var _ = require('lodash');

// You can't print the same number twice
var numbers = [];

_.times(100, function () {
 numbers.push(_.random(0, 100));
});

numbers = _.uniq(numbers);

while (numbers.length < 100) {
 numbers.push(_.random(0, 100));
 numbers = _.uniq(numbers);
}

numbers = _.sortBy(numbers);

console.log(numbers);




