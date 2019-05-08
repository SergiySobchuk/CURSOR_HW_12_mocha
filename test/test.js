const expect = require("chai").expect;
const Iterator = require("../script");

const startIndex = 0;
const iterator = new Iterator(startIndex);
describe("Тест роботи Iterator-а", () =>{
    it("Тест метода CURRENT(), 1 раз", ()=>{
        expect(iterator.current()).to.be.equal(0);
    });
    it("Тест метода NEXT(), 6 раз", ()=>{
        for (let i=0; i<6; i++ ) {
            iterator.next()
        }
        expect(iterator.current()).to.be.equal(8);
    })
    it("Тест метода PREV(), 2 раза", ()=>{
        for (let i=0; i<2; i++ ) {
            iterator.prev()
        }
        expect(iterator.current()).to.be.equal(3);
    })
    it("Тест метода KEY()", ()=>{
        expect(iterator.key()).to.be.equal(4);
    })
    it("Тест метода REWIND()", ()=>{
        iterator.rewind();
        expect(iterator.current()).to.be.equal(0);
    })
});