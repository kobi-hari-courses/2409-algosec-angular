function whenButtonClicked() {
    var el = document.getElementById('header');
    el.style.color = 'red'; 
      
    var btn = document.getElementById('btnClick');     
    btn.innerHTML = 'I was <b>clicked</b>';
    btn.style.border = '5px solid magenta';
}


function runThisOnlyAfterPageLoad() {
    console.log('Hello JavaScript');
}


