// function hello(){
//     console.log('hello world')
// }



// let btn = document.getElementById('btn');
// btn.onclick = function(){
//     console.log('hello')
// }



// let btn = document.getElementById('btn');
// function hello(){
//     console.log('go back')
// }
// btn.onclick = hello;


// let btn = document.getElementById('btn');
// function hello(){
//     document.body.style.background = 'red'
// }
// btn.onclick = hello;
// Element.onevent = function



// let btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
//     console.log('hello');
// })
// btn.addEventListener('write event without on', the command)


// *** The difference between two method ***

// method1
// let btn = document.getElementById('btn');

// btn.onclick = function(){
//     document.body.style.background = 'red';
// }

// btn.onclick = function(){
//     btn.style.background = 'blue';
// }

// btn.onclick = function(){
//     btn.style.color = 'white';
// }

// method2
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     document.body.style.background = 'red';
// })
// btn.addEventListener('click', function(){
//     btn.style.background = 'blue';
// })
// btn.addEventListener('click', function(){
//     btn.style.color = 'white';
// })