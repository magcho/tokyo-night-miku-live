if(localStorage.getItem('tnm-twitter-id') != null){
  console.log(localStorage.getItem('tnm-twitter-id'));
  document.getElementById('twitter-value').value = localStorage.getItem('tnm-twitter-id')
}
if(localStorage.getItem('tnm-email-addr') != null){
  console.log(localStorage.getItem('tnm-twitter-id'));
  document.getElementById('email-value').value = localStorage.getItem('tnm-email-addr')
}

let save = ()=>{
  localStorage.setItem('tnm-twitter-id',document.getElementById('twitter-value').value);
  localStorage.setItem('tnm-email-addr',document.getElementById('email-value').value);
}
