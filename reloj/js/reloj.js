const mostrarReloj=()=>{
    let fecha=new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML=`${hr}:${min}:${seg}`;

    const meses = [" Ene "," Feb "," Mar "," Abr "," May "," Jun "," Jul "," Ago "," Sep "," Oct "," Nov "," Dic "];
    const dias = [" Dom "," Lun "," Mar "," Mie "," Jue "," Vie "," Sab "];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    
    let Mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}${dia}${Mes}`;
    //es mejor dejarlo todo junto ya que si cepara se agregan consas extras como "de" o se deforma el texto
    document.getElementById("fecha").innerHTML=fechaTexto;
}
const formatoHora = (hora) =>{
    if(hora<10)
        hora = "0" + hora;
    return hora;
}
setInterval(mostrarReloj,1000);
//,toggle es una "animacion" de respiracion, lo que este hace es que coloca un efecto/elemento que ayamos echo en css y si esta aplicado lo saca y asi de forma repetitiva