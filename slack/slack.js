const slack = require('slack');

slack.api.test({}, (err, data) => {
  console.log(data)
});