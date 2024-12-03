const qs = require('node:querystring')

const baseUrl = 'https://example.com'

// transform object to string
const uri = qs.stringify({
    post: '1234',
    comment: 'hello world',
})

const url = `${baseUrl}?${uri}`
console.log(`URL => ${url}`) // https://example.com?post=1234&comment=hello%20world

const parsedUrl = qs.parse(uri)
console.log(parsedUrl) // { post: '1234', comment: 'hello world' }

const escapedString = qs.escape('hello world')
console.log(escapedString) // hello%20world

const unescapedString = qs.unescape(escapedString)
console.log(unescapedString) // hello world
