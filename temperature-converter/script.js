let celinput=document.querySelector('#box1 > input')
let fahinput=document.querySelector('#box2 > input')
let kelinput=document.querySelector('#box3 > input')
let btn=document.querySelector('.btn button')

function roundnumber(number){
    return Math.round(number*100)/100;
}
celinput.addEventListener('input', function(){
    let ctemp=parseFloat(celinput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15

    fahinput.value=roundnumber(ftemp)
    kelinput.value=roundnumber(ktemp)
})

fahinput.addEventListener('input', function(){
    let ftemp=parseFloat(fahinput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15

    celinput.value=roundnumber(ctemp)
    kelinput.value=roundnumber(ktemp)
})

kelinput.addEventListener('input', function(){
    let ktemp=parseFloat(kelinput.value)
    let ctemp=ktemp-273.15
    let ftemp=((ktemp-273.15)*(9/5))+32

    celinput.value=roundnumber(ctemp)
    fahinput.value=roundnumber(ftemp)
})

btn.addEventListener('click',()=>{
    celinput.value=""
    fahinput.value=""
    kelinput.value=""

})