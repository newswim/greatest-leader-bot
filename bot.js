const twit = require('twit')
// See readme - this file contains secrets!
const config = require('./config')
const fs = require('fs')

const Twitter = new twit(config)

const retweet = () => {
  const params = {
    q: '#MakeAmericaGreatAgain',
    result_type: 'recent',
    lang: 'en'
  }

  // The Twitter.get function accepts three arguments:
  // API endpoint, params object (defined by us) and a callback.

  Twitter.get('search/tweets', params, (err, data) => {
    // happy path
    if (!err) {
      fs.writeFile('dataResp.json', JSON.stringify(data)); /* Converts a JavaScript value to a JSON string. */
      // grab ID of tweet to retweet
      let retweetId = data.statuses[0].id_str;
      // tell Twitter to retweet
      Twitter.post('statuses/retweet/:id', {
        id: retweetId
      }, (err, response) => {
        if (response) {
          console.log('Retweeted!!! id: ' + retweetId)
        }
        // if there was an error while retweeting...
        if (err) {
          console.log('Something went wrong while RETWEETING... Duplication maybe...')
        }
      })
    }
    else {
      console.log('Something went wrong while SEARCHING');
    }
  })
}

// REMOVE a tweet (must be original owner)
// Twitter.post('statuses/destroy/:id', { id: '812419256935743488' }, function (err, data, response) {
//   console.log(data)
// })

// search and retweet as soon as the program is running...
// retweet();
// retweet every 5 minutes
// setInterval(retweet, 300000);

exports.retweet = retweet
exports.T = Twitter
