# daum-tvpot

tvpot library for Node.js

The unofficial module to crawl the content of the site.
Therefore, whenever it may not be a normal operation, if problems occur, please add the issue.

[![version](https://img.shields.io/npm/v/daum-tvpot.svg) ![download](https://img.shields.io/npm/dm/daum-tvpot.svg)](https://www.npmjs.com/package/daum-tvpot)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

```javascript
var tvpot = require('./')

tvpot.search({
  keyword: '런닝맨',
  limit: 1,
  page: 1
}, function (err, result) {
  console.log(err, JSON.stringify(result))
})

```
```javascript
{
  "page": 1,
  "limit": 1,
  "keyword": "런닝맨",
  "sort": "regdttm",
  "items": [
    {
      "url": "http://tvpot.daum.net/clip/ClipView.do?clipid=73976309&q=%EB%9F%B0%EB%8B%9D%EB%A7%A8",
      "title": "[1월 31일 예고] 상해 10인의 결사단! [런닝맨] 415회 20160124",
      "thumb_url": "http://i1.daumcdn.net/thumb/C120x68/?fname=http://i1.daumcdn.net/svc/image/U03/tvpot_thumb/sa95aamJ9VIV9momj9mEoeA/thumb.png?t=1453629388759",
      "duration": 1680
    },
    // ...
  ]
}
```

### sort

* `regdttm`
* `playcnt`
* `upcnt`


## LICENSE

daum-tvpot is licensed under the MIT license.
