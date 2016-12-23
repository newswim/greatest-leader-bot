// ======== FavBot ============

const { T } = require('./bot')
const {randoM} = require('./utilities')

// find a random tweet and 'favorite it'

const favoriteTweet = () => {
  const params = {
    q: '#truthout',
    result_type: 'recent',
    lang: 'en',
  }

  // find tweets
  T.get('search/tweets', params, (err, data) => {
    // grab tweets
    let tweet = data.statuses
    let randomTweet = randoM(tweet)

    // check for tweet -> happy path
    if (typeof randomTweet != 'undefined') {
      // tell Tweetbot to favorite it
      T.post('favorites/create', {
        id: randomTweet.id_str
      }, (err, response) => {
        if (err) console.log('CANNOT BE FAVORITED... Error: ', err);
        else {
          console.log('FAVORITED... Success!', response);
        }
      })
    }
  })
}

// activate favoriteBot as soon as program starts..
favoriteTweet()
// favorite a tweet every 30 seconds
setInterval(favoriteTweet, 30000);
