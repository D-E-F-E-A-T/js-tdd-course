import { expect } from 'chai'
import { sum, sub, div, mult } from '../src/main.js'

describe('Calc', () => {

	//Smoke tests

	describe('Smoke tests', () => {

		it('should  exist the method sum', () => {
			expect(sum).to.exist
			expect(sum).to.be.a('function')
		})

		it('should  exist the method mult', () => {
			expect(mult).to.exist
			expect(mult).to.be.a('function')
		})

		it('should  exist the method sub', () => {
			expect(sub).to.exist
			expect(sub).to.be.a('function')
		})

		it('should  exist the method div', () => {
			expect(div).to.exist
			expect(div).to.be.a('function')
		})

		describe('Method: Sum', () => {

			it('should return 4 when `sum(2,2)`', () => {
				expect(sum(2, 2)).to.be.equal(4)
			})

			it('should return 10 when `sum(5,5)` ', () => {
				expect(sum(5, 5)).to.be.equal(10)
			})

		})

		describe('Method: Sub', () => {

			it('should return 2 when `sum(4,2)`', () => {
				expect(sub(4, 2)).to.be.equal(2)
			})

			it('should return -2 when `sub(2,4)`', () => {
				expect(sub(2, 4)).to.be.equal(-2)
			})

		})

		describe('Method: Mult', () => {

			it('should return 4 when `mult(2,2)`', () => {
				expect(mult(2, 2)).to.be.equal(4)
			})

			it('should return 10 when `mult(2,5)`', () => {
				expect(mult(2, 5)).to.be.equal(10)
			})

		})

		describe('Method: Div', () => {

			it('should return 2 when `div(4,2)`', () => {
				expect(div(4, 2)).to.be.equal(2)
			})

			it('should return `Division by 0 is invalid` when divide by 0', () => {
				expect(div(4, 0)).to.be.equal('Division by 0 is invalid')
			})

		})

	})

})