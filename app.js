/*
 * モジュール読み込み
 */
var request = require('request')
, config = require('./config');

request.post({
  uri: 'https://qiita.com/api/v1/auth/',
  form: {
    url_name: config.username,
  password: config.password
  },
  json: true
}, function(err, res, body) {
  if (!err && res.statusCode == 200) {
    console.log(body);
  } else {
    console.log('error: '+ res.statusCode);
  }
});

