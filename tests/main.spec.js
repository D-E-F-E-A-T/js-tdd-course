const expect = require('chai').expect

let arr = []

beforeEach(() => {
	arr = [1, 2, 3, 4]
})

describe('Numbers', () => {

	it('should be an array', () => {
		expect(arr).to.be.an('array')
	})

	it('should have a size of 5 when push another value to the array', () => {
		arr.push(5)
		expect(arr).to.have.length(5)
	})

	it('should remove the value 4 when use pop method in array', () => {
		arr.pop()
		expect(arr).to.not.include(4)
	})

});
