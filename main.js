let app = document.getElementById('typewriter');
  
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: function(character) {
    const span = document.createElement('span');
    span.innerHTML = character;
    span.style.fontFamily = "'Poetsen One', sans-serif";
    span.style.color = "#33B8FF";
    return span;
  }
});

typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Ingeniería en sistemas Computacionales')
  .pauseFor(200)
  .deleteChars(10)
  .start();
