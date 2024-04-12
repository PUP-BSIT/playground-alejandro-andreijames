type Circle = {
    radius: number;
};

type Square = {
    sideLength: number;
};

type Shape = Circle | Square;

const circle: Circle = {
    radius: 6
};

const square: Square = {
    sideLength: 6
};

function calculateArea(shape: Shape): number {
    if('radius' in shape) {
        return Math.PI * shape.radius ** 2;
    }
    return shape.sideLength ** 2;
}

console.log("Area of circle:", calculateArea(circle));
console.log("Area of square:", calculateArea(square));
