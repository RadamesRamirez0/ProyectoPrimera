var bd = JSON.parse(localStorage.getItem("bd"));
if (!bd || bd==undefined||bd.login.is==false)
    location.replace("login.html");
window.onload = function(){
    const ind = bd.login.userindex;
    var txt="";
    document.getElementById("h3deudor").innerHTML=bd.usuarios[ind].nombre;
    for(var i in bd.usuarios[ind].deuda.cobros)
        txt+=`
                <div class="card">
                <p> <strong>Fecha:</strong> ${bd.usuarios[ind].deuda.cobros[i].fecha}</p>
                <p> Monto cobrado: ${bd.usuarios[ind].deuda.cobros[i].cantidad}</p>
                </div>
                `;
    document.getElementById("divcobros").innerHTML = txt;
    txt="";
    for(var i in bd.usuarios[ind].deuda.pagos)
        txt+=`
                <div class="card">
                <p> <strong>Fecha:</strong> ${bd.usuarios[ind].deuda.pagos[i].fecha}</p>
                <p> Monto pagado: ${bd.usuarios[ind].deuda.pagos[i].cantidad}</p>
                </div>
                `;
    document.getElementById("divpagos").innerHTML = txt;
    let montorestante = bd.usuarios[ind].deuda.montototal - bd.usuarios[ind].deuda.montopagado;
    document.getElementById("divfaltante").innerHTML =montorestante;
}