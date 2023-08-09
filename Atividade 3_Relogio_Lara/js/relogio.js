const hr = document.querySelector('#horas')
const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')
const dia = document.querySelector('#dias')

const tempo = setInterval(function time (){

let sistema = new Date()
let hora = sistema.getHours()
let minutos = sistema.getMinutes()
let segundos = sistema.getSeconds()
let dias = sistema.getDate()


if(hora<10){
    hora = "0"+hora
}
if(minutos<10){
    minutos = "0"+minutos
}
if(segundos<10){
    segundos = "0"+segundos
}
if(dias<365){
    dias = 365 - 219
}


hr.textContent = hora
min.textContent = minutos
seg.textContent = segundos
dia.textContent = dias





},1000)





