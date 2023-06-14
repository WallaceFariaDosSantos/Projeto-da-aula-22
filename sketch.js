//prof o projeto ta muito simples porque não tive muito tempo, e também estou muito cansado
//também só troquei a imagem de fundo porque as outras ficaram muito pequenas e não sei trocar scale usando essa biblioteca
//o chat gpt não me ajudou nisso então não deu bom não '-'

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher, playerArcherImg;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(1000, 800);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  }

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  //criar corpo do jogador
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  //braço do jogador
  playerArcher = Bodies.rectangle(250, 190, 50, 180, options);
}

function draw() {
  background(backgroundImg);
//exibir a imagem do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);

  //exibir a imagem da base do jogador usando a função image()
  image(playerimage, player.position.x, player.position.y, 50, 180);

  //archer img
  image(playerArcherImg, playerArcher.position.x, playerArcher.position.y, 50, 180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
