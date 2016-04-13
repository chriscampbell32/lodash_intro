var _ = require('lodash');
var request = require('request-promise');

request("http://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        var posts  = JSON.parse(response);

       var importantPosts =  _.filter(posts, function(post){
            return _.startsWith(post.title, "dolor");
        });

        console.log(importantPosts);


    });