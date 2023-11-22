function val(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
    document.getElementById('ans').innerHTML= a+b
}
function get(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
    document.getElementById('ans1').innerHTML= a-b
}
function val1(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
   document.getElementById('ans2').innerHTML= a*b
}
function val2(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
    document.getElementById('ans3').innerHTML= a/b
}
function val3(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
   document.getElementById('ans4').innerHTML= a%b
}
function val4(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
   document.getElementById('ans5').innerHTML= a++
}
function val5(){
    var a=Number(document.getElementById('a').value)
    var b=Number(document.getElementById('b').value)
   document.getElementById('ans6').innerHTML= --b
}