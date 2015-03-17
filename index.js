var Twit = require('twit');
var u = require('underscore');
var fs = require('fs');


var T = new Twit({
    consumer_key:         '68ppeY3zTvuWyrPOR1Rc2Qs6F'
  , consumer_secret:      'jsZlfXW9Y2fPv1TKiw3oywlVMRFXCduTkBazaT0YccfUABtlJB'
  , access_token:         '78072247-jU5TUWfU4JvkguAikTe8NqvLaWsJnUkybdPCkksMY'
  , access_token_secret:  'kcQ4XCoL6ScdIYkSxHxwmiAOWBbSACG1hvW0FC0zsLC8M'
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