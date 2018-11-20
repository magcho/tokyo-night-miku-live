new Vivus('svg-anime', {
  type: 'delayed',
  duration: 100,
  animTimingFunction: Vivus.EASE ,
  file: './img/logo-animate.svg'
}, callback);

function callback(){
  document.getElementById('logo2').style.opacity = 1
  document.getElementById('logo1').style.opacity = 0
}
