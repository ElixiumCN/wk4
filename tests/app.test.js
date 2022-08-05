const app = require('../app.js')

test('returns 5 when pass 2 and 3', () => {
    expect(app.add(2, 3)).toBe(5)
})

// run test: npm test
// const app = require('../app.js')
// ^ abvoe line in the test file itself.

// module.exports = {} at the end of our app.js file
// require our app.js file in the test file using the require method by const app = require ('../app.js')