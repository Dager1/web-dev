console.log("hello")
const title1 = document.getElementById('tilt')
console.log('befor:', title1.innerText)
const mess = 'let them pay'
title1.innerText= mess
console.log('after:',title1.innerText)
title1.innerHTML=`${mess}`
title1.style.color ='orange'

let reddiv=document.getElementById('red')
let yellowdiv=document.getElementById('yellow')
let greendiv=document.getElementById('green')
reddiv.onclick = () => console.log('red')
yellowdiv.onclick = () => console.log('yellow')
greendiv.onclick = () => console.log('green')

const colorsqr= document.querySelector('reddd')
console.log(colorsqr)  
