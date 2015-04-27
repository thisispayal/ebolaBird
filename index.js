var Twit = require('twit');
var u = require('underscore');
var fs = require('fs');


var T = new Twit({
    consumer_key:         '....'
  , consumer_secret:      '....'
  , access_token:         '....'
  , access_token_secret:  '....'
})

var out;

T.get('search/tweets', 
	{ q: '#flu since:2015-03-16 until:2015-03-17', count: 100}, 
	function(err, data, response) {
		//u.reduce(data.statuses, function(memo, status){
			//return memo + "\n" + status.text;

		//})
	var texts = u.map(data.statuses, function(status){
		return status.text;
	})

	fs.writeFile("tmp.txt", JSON.stringify(texts));

	}
);
