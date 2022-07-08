console.log("windpiper")
let redlist = document.getElementById("red")
let yellowlist = document.getElementById("yellow")
let greenlist = document.getElementById("green")
// redlist.onclick=()=>console.log("red")
// yellowlist.onclick=()=>console.log("yellow")
// greenlist.onclick=()=>console.log("green")

const colorsqr= document.querySelectorAll('.colsqr')
console.log(colorsqr)

// console.log(colorsqr[0].value)
// console.log(colorsqr[1].value)
// console.log(colorsqr[2].value)

//forEachLoop
/*colorsqr.forEach(colorsqr=>console.log(colorsqr.value))*/
const timeclicker = {'red':0,'yellow':0,'green':0}
colorsqr.forEach(colorsqr=>{colorsqr.onclick=()=>
    // console.log(colorsqr.value)
    {
        timeclicker[colorsqr.value]+=1
        colorsqr.innerText=timeclicker[colorsqr.value]
    }
})