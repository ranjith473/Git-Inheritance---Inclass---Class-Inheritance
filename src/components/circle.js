// import using require

// declare class


// export class using module.exports
import Shape from './shape';
export default class Circle extends Shape {
    constructor() {
        super();
    }
    cacluatearea() {
        console.log("Area of circle with color" + this.color);
    return 3.14*5*5;
    }
}