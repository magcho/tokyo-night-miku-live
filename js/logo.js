
const debug  = false
scrollTo(0,0)

const callback = () =>{
  document.getElementById('logo2').style.opacity = 1
  document.getElementById('logo1').style.opacity = 0
  headerHegiht();
  if(!debug){
    document.getElementById('blind-cover').style.opacity = 0
  }
}
const headerHegiht = () =>{
  document.getElementsByTagName('header')[0].style.height = document.getElementById('logo1').clientHeight;
}


if(debug){
  new Vivus('svg-anime', {
    type: 'delayed',
    duration: 1,
    animTimingFunction: Vivus.EASE ,
    file: './img/logo-animate.svg'
  }, callback);
}else{
  new Vivus('svg-anime', {
    type: 'delayed',
    duration: 100,
    animTimingFunction: Vivus.EASE ,
    file: './img/logo-animate.svg'
  }, callback);
}
