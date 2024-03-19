var canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
var text =
  "const express = require('express');const cors = require('cors');const db = require('./db');const usersRouter = require('./routes/users');const app = express();const PORT = process.env.PORT || 3000;app.use(cors());app.use(express.json());app.use('/users', usersRouter);app.listen(PORT, () => {console.log(`Server Listen ${PORT}`);});const mysql = require('mysql');const dotenv = require('dotenv');dotenv.config();const db = mysql.createConnection({host: process.env.DB_HOST,user: process.env.DB_USER,password: process.env.DB_PASSWORD,database: process.env.DB_NAME,});db.connect((err) => {if (err) throw err;console.log('Db');});module.exports = db;";
var textSplit = text.split(";");
var fontSize = 12;
var speed = 1;
var posX = 0;
var posY = 0;

/* function drawText(
  textIndex: number,
  posX: number,
  posY: number,
  color: string = "#fff",
  speed: number = 1,
) {
  ctx.fillStyle = color;
  ctx.font = fontSize + "px Arial";
  ctx.fillText(textSplit[textIndex], posX * speed, posY);
}

const moveText = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  posX += speed;
  //var index = Math.floor(Math.random() * textSplit.length);
  drawText(0, posX, posY + fontSize);
  if (posX > canvas.width) {
    posX = -ctx.measureText(textSplit[0]).width;
    //requestAnimationFrame(moveText);
  }
  //requestAnimationFrame(moveText);
};
//moveText();
requestAnimationFrame(moveText); */
addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;

  constructor() {
    this.x = 500;
    this.y = 500;
    this.vx = 5;
    this.vy = 2;
    this.radius = 50;
    this.color = "blue";
  }

  draw() {
    // implementation of the draw method
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const ball = new Ball();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);