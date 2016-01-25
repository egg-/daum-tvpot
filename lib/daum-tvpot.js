var request = require('request')
var cheerio = require('cheerio')

var duration = function (txt) {
  var time = txt.split(':')
  var sec = 0

  for (var i = 0; i < time.length; i++) {
    sec += Math.pow(60, i) * time[i]
  }

  return sec
}

module.exports = {
  /**
   * search videos
   * @method search
   * @param  {object} opts
   * @param  {number} opts.limit not work
   * @param  {number} opts.page
   * @param  {number} opts.keyword
   * @param  {number} opts.sort `regdttm`, `playcnt`, `upcnt`
   * @param  {Function} cb cb(err, result)
   * @return {number} page
   * @return {number} limit
   * @return {string} keyword
   * @return {string} sort
   * @return {array<object>} items
   */
  search: function (opts, cb) {
    var limit = opts.limit || 10
    var page = opts.page || 1
    var keyword = opts.keyword || ''
    var sort = (opts.sort || 'regdttm')
    var qs = [
      'q=' + encodeURIComponent(keyword),
      'service=clip',
      'sort=' + sort,
      'target=title',
      'page=' + page,
      'size=' + limit
    ]
    request
      .get(
        'http://tvpot.daum.net/search/?' + qs.join('&'),
        function (err, res, body) {
          if (err) {
            return cb(err)
          }

          var $ = cheerio.load(body)

          var items = []
          var $items = $('.unit_result ul.clip_list li')
          var $item = null
          var $anchor = null
          var $img

          for (var i = 0; i < $items.length; i++) {
            $item = $($items[i])
            $anchor = $($item.find('dd.title a'))
            $img = $($item.find('dd.image img'))

            items.push({
              url: 'http://tvpot.daum.net' + $anchor.attr('href'),
              title: $img.attr('alt'),
              thumb_url: $img.attr('src'),
              duration: duration($($item.find('dd.duration em.time')).text())
            })
          }

          cb(null, {
            page: page,
            limit: limit,
            keyword: keyword,
            sort: sort,
            items: items
          })
        }
    )
  }
}
