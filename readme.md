#### Feature set?

- Retweet recontextualized tweets
- Gather and parse tweets
- Search and replace for certain keywords, example:
```raw
America ----- American ----- Great ----- Greatest
v
North Korea - North Korean - Wonderful - Greatest
```

- o We'll need a way to store tweets (could just be a buffer)
- o Parse tweets and find/replace keywords
- o Post tweets at certain intervals


Either a JSON file or in-memory struct to store keyword mappings


## Instructions

If you want to use this as a boilerplate for your tweetbot, you'll need to create a `config.js` file, then create a new app from your twitter account and fill the settings like so:

```js
//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
module.exports = {  
  consumer_key: '',  
  consumer_secret: '',
  access_token: '',  
  access_token_secret: ''
}
```

Currently, this app just follows [this tutorial](https://community.risingstack.com/node-js-twitter-bot-tutorial/) verbatim. Thanks to the original authors for advice and instructions!
