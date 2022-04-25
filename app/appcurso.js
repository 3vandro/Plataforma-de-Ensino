var btnA = document.querySelector('#show-or-hide-a');
var btnB = document.querySelector('#show-or-hide-b');
var btnC = document.querySelector('#show-or-hide-c');
var btnD = document.querySelector('#show-or-hide-d');
var btnE = document.querySelector('#show-or-hide-e');
var btnF = document.querySelector('#show-or-hide-f');
var btnG = document.querySelector('#show-or-hide-g');


var cta = document.querySelector('.cta');
var ctb = document.querySelector('.ctb');
var ctc = document.querySelector('.ctc');
var ctd = document.querySelector('.ctd');
var cte = document.querySelector('.cte');
var ctf = document.querySelector('.ctf');
var ctg = document.querySelector('.ctg');


btnA.addEventListener('click', function(){
    if(cta.style.display === 'block') {
        cta.style.display = 'none';
    }else{
        cta.style.display ='block';
    }
});
btnB.addEventListener('click', function(){
    if(ctb.style.display === 'block') {
        ctb.style.display = 'none';
    }else{
        ctb.style.display ='block';
    }
});
btnC.addEventListener('click', function(){
    if(ctc.style.display === 'block') {
        ctc.style.display = 'none';
    }else{
        ctc.style.display ='block';
    }
});
btnD.addEventListener('click', function(){
    if(ctd.style.display === 'block') {
        ctd.style.display = 'none';
    }else{
        ctd.style.display ='block';
    }
});
btnE.addEventListener('click', function(){
    if(cte.style.display === 'block') {
        cte.style.display = 'none';
    }else{
        cte.style.display ='block';
    }
});
btnF.addEventListener('click', function(){
    if(ctf.style.display === 'block') {
        ctf.style.display = 'none';
    }else{
        ctf.style.display ='block';
    }
});
btnG.addEventListener('click', function(){
    if(ctg.style.display === 'block') {
        ctg.style.display = 'none';
    }else{
        ctg.style.display ='block';
    }
});


