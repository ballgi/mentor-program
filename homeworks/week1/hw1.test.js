import {stars} from './hw1'

describe("hw1", () => {
  it("should return correct answer when n = 1", () => {
    expect(stars(1)).toEqual(['*'])
  })
  
   it("should return correct answer when n = 2", () => {
    expect(stars(2)).toEqual(['*','**'])
  })
  
   it("should return correct answer when n = 4", () => {
    expect(stars(4)).toEqual(['*','**','***','****'])
  })
  
  it("should return correct answer when n = 6", () => {
    expect(stars(6)).toEqual(['*','**','***','****','*****','******'])
  })
})
