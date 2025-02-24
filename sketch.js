function setup() {
    createCanvas(400, 400);
    }
    
    function draw() {
      background(220,220,220); //escolha um codigo para a cor
      
      // desenhando a linha superiror
      circle(50,50,100); // primeiro circulo
      circle(150,50,100); // segunda circulo
      circle(250,50,100); // terceiro circulo
      circle(350,50,100); // quarto circulo
      
      // desenhando a linha inferior
      circle(50,350,100); // primeiro circulo
      circle(150,350,100); // segunda circulo
      circle(250,350,100); // terceiro circulo
      circle(350,350,100); // quarto circulo
      
    }