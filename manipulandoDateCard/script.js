

let mesAno = [`janeiro`, `fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, 
    `Agosto`, `Setembro`, `Outubro`, `Novembro`, `dezembro`]

    let diaSemana = [`Dom`, `Seg`, `Ter`, `Qua`, `Qui`, `Sex`, `Sab`]


setInterval(() => {

    let date = new Date()

    let relogio = document.querySelector(`.relogio`)

    let diaAtual = date.getDate()

    let nomeMesAtual = date.getMonth() 
    
    let horaAtual = date.getHours
    
    let nomeDiaSemana = mesAno[date.getDay()]
    
    let minutosAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
     
    relogio.innerHTML = <div class="card">
        <div class="date">
            <h1>${horaAtual}:${minutosAtual} </h1>
            <p>${nomeDiaSemana}, ${diaAtual} 
                ${}
            </p>
        </div>
    </div>

    if (horaAtual) {
        
    }

}, 1000);