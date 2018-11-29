const main = () => {
  if(localStorage.getItem('tnm-twitter-id') != null){
    document.getElementById('twitter').textContent = ` ${localStorage.getItem('tnm-twitter-id')}`
    setAleady('twitter', localStorage.getItem('tnm-twitter-id'))
  }
  if(localStorage.getItem('tnm-email-addr') != null){
    document.getElementById('email').textContent = ` ${localStorage.getItem('tnm-email-addr')}`
    setAleady('email', localStorage.getItem('tnm-email-addr'))
  }
  makeImg()
}

const setAleady = (type, value) => {
  localStorage.setItem('aleady', true)
}
const makeImg = () =>{
  html2canvas(document.querySelector("#palette"))
    .then(shot(canvas))
}


onload = function() {
  main()
}
let shot = (canvas) => {
  return function(){
    return new Promise(function(resolve) {
      var imgData = canvas.toDataURL();
      document.getElementById("result").src = imgData;
      console.log(1);
      resolve()
    });
  }
}
