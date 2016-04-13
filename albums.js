var _ = require('lodash');
var request = require('request-promise');

request("http://jsonplaceholder.typicode.com/albums")
    .then(function(response){
        var albums  = JSON.parse(response);
        var result = {};

       var result = _.groupBy(albums, 'userId');
       console.log(result);

        // loop over array of objects
            // check user_id and create new key if unique
                // add album object to new hash
        console.log(result[7]);
    });