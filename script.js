const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

//fillRect()
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);

ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 150, 100);

//StrokeRect()
//Outline of a rectangle
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(100, 200, 150, 100);

//ClearRect()
ctx.clearRect(25, 25, 140, 90);
