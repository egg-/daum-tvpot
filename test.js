var tvpot = require('./')

tvpot.search({
  keyword: '런닝맨',
  limit: 1,
  page: 1
}, function (err, result) {
  console.log(err, JSON.stringify(result))
})
