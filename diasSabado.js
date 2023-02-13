let dias = document.querySelector("#dias");
let hora = document.getElementById("hora");

//______________________________________________________________________________________



function diasRestantesSiguienteSabado() {
    let today = new Date()
    let nextSaturday = new Date(
      today.getFullYear(),                                   
      today.getMonth(),                                    
      today.getDate() + (6 + 7 - today.getDay()) % 7  )

      const milisegundosTranscurridos = Math.abs(today.getTime() - nextSaturday.getTime());
      const milisegundosDia = 24* 60 * 60 * 1000;  // 1 día = 86400000 milisegundos
      const diasParaSabado = Math.round(milisegundosTranscurridos/milisegundosDia);
      dias.textContent= diasParaSabado
    
  } 
  diasRestantesSiguienteSabado()

//________________________________________________________________

function mostrarHora() {
    const momentoActual = new Date()
    const horaActual = momentoActual.getHours()
    const minuto = momentoActual.getMinutes()


    const horaImpreso = horaActual + " : " + minuto
    hora.textContent = horaImpreso
}
mostrarHora()








