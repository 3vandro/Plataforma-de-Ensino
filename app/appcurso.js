// var btn = document.querySelector('#show-or-hide');
// var cta = document.querySelector('.cta');
// var ctb = document.querySelector('.ctb');
// var ctc = document.querySelector('.ctc');
// var ctd = document.querySelector('.ctd');
// var cte = document.querySelector('.cte');
// var ctf = document.querySelector('.ctf');
// var ctg = document.querySelector('.ctg');


// btn.addEventListener('click', function(){
//     if(cta.style.display === 'block') {
//         cta.style.display = 'none';
//     }else{
//         cta.style.display ='block';
//     }
// });
// btn.addEventListener('click', function(){
//     if(ctb.style.display === 'block') {
//         ctb.style.display = 'none';
//     }else{
//         ctb.style.display ='block';
//     }
// });
// btn.addEventListener('click', function(){
//     if(ctc.style.display === 'block') {
//         ctc.style.display = 'none';
//     }else{
//         ctc.style.display ='block';
//     }
// });
// btn.addEventListener('click', function(){
//     if(ctd.style.display === 'block') {
//         ctd.style.display = 'none';
//     }else{
//         ctd.style.display ='block';
//     }
// });
// btn.addEventListener('click', function(){
//     if(cte.style.display === 'block') {
//         cte.style.display = 'none';
//     }else{
//         cte.style.display ='block';
//     }
// });
// btn.addEventListener('click', function(){
//     if(ctf.style.display === 'block') {
//         ctf.style.display = 'none';
//     }else{
//         ctf.style.display ='block';
//     }
// });
// btn.addEventListener('click', function(){
//     if(ctg.style.display === 'block') {
//         ctg.style.display = 'none';
//     }else{
//         ctg.style.display ='block';
//     }
// });


function mostra(id){
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.diplay ='block';
    }else{
        document.getElementById(id).style.display = 'none'
    }
}
mostra('id')