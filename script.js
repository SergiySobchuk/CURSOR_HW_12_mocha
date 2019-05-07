function fibonacci(n) {
    let number = 1;
    let f = [1, 1];
    if (n === 0) {
        return {
            number: 0,
            index: 0
        }
    } else if (n === 1) {
        return {
            number: number,
            index: n
        }
    } else if (n === 2) {
        return {
            number: number,
            index: n
        }
    } else if (n === 3 || n > 3) {
        for(let i = 2; i < n; i++){
            f[i] = (f[i-1]) + (f[i-2]);
            number = f[i];
        }
        return {
            number: number,
            index: n
        }
    }
}
class Iter {
    constructor(startIndex){
        this.index = startIndex;
    }
    current(){
        this.fibonacci = fibonacci(this.index).number;
        console.log("value: ", this.fibonacci);
    }
    next(){
        this.index += 1;
        this.fibonacci = fibonacci(this.index).number;
        console.log("value: ",this.fibonacci);

    }
    prev(){
        this.index -= 1;
        this.fibonacci = fibonacci(this.index).number;
        console.log("value: ",this.fibonacci);
    }
    key(){
        this.fibonacci = fibonacci(this.index).index;
        console.log("key: ",this.fibonacci);
    }
    rewind(){
        this.index = 0;
        console.log("value : 0");
        console.log("key: 0");
    }
}

iterator = new Iter(6);
iterator.current();
iterator.next();
iterator.prev();
iterator.key();
iterator.rewind();
