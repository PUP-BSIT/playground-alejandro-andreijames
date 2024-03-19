var circle = {
    radius: 6
};
var square = {
    sideLength: 6
};
function calculateArea(shape) {
    if ('radius' in shape) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return Math.pow(shape.sideLength, 2);
}
console.log("Area of circle:", calculateArea(circle));
console.log("Area of square:", calculateArea(square));
