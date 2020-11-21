var bd = JSON.parse(localStorage.getItem("bd"));
if (!bd || bd==undefined||bd.login.is==false||bd.login.type!="propietario")
    location.replace("../login.html");
window.onload = function(){

    var txt="";
    for(let i in bd.usuarios)
        if(bd.usuarios[i].tipo=="deudor")
            txt+=`<option>${bd.usuarios[i].nombre}</option>`;
    
    document.getElementById("selector").innerHTML=txt;
    var sel = document.getElementById("selector").value;
    let montototal =0;
    let montotpagado=0;
    for(var i in bd.usuarios)
        if(bd.usuarios[i].deuda != undefined)
        {
            montototal+=bd.usuarios[i].deuda.montototal;
            montotpagado+=bd.usuarios[i].deuda.montopagado;
            
        }
    document.getElementById("h4a").innerHTML=montototal;
    document.getElementById("h4b").innerHTML=montotpagado;

}
document.getElementById("selector").addEventListener("change", ()=>{
    var txt="";
    var txt2="";
    var txt3="";
    var sel = document.getElementById("selector").value;
    for(let i in bd.usuarios)
        if(bd.usuarios[i].deuda != undefined)
            if(bd.usuarios[i].nombre==sel)
            {
                txt=`
                <div class="card">
                <p> <strong>Nombre:</strong> ${bd.usuarios[i].nombre}</p>
                <p> Monto total: ${bd.usuarios[i].deuda.montototal}</p>
                <p> Monto pagado: ${bd.usuarios[i].deuda.montopagado}</p>
                </div>
                `
                for(let j in bd.usuarios[i].deuda.cobros)
                    txt2+=
                    `
                    <div class="card">
                    <p> Fecha: ${bd.usuarios[i].deuda.cobros[j].fecha}</p>
                    <p> Cobro de: ${bd.usuarios[i].deuda.cobros[j].cantidad}</p>
                    </div>
                    `
                for(let j in bd.usuarios[i].deuda.pagos)
                    txt3+=
                    `
                    <div class="card">
                    <p> Fecha: ${bd.usuarios[i].deuda.pagos[j].fecha}</p>
                    <p> Pago de: ${bd.usuarios[i].deuda.pagos[j].cantidad}</p>
                    </div>
                    `
                
            }
            document.getElementById("divusuario").innerHTML=txt;
                document.getElementById("divcobros").innerHTML=txt2;
                document.getElementById("divpagos").innerHTML=txt3;
    
    
    
});
document.getElementById("datesel").addEventListener("change",()=>{
    var txt="";
    var txt2="";
    var datesel = document.getElementById("datesel").value;
    var fecha=[];
    var fechaf="";
    fecha = datesel.split("-");
    fechaf = fecha[2]+"/"+fecha[1]+"/"+fecha[0];
    console.log(fecha,fechaf)
    for(var i in bd.usuarios)
        if(bd.usuarios[i].deuda != undefined)
            for(var j in bd.usuarios[i].deuda.pagos)
                if(bd.usuarios[i].deuda.pagos[j].fecha == fechaf)
                    txt+=
                    `
                    <div class="card">
                    <p> <strong>Nombre:</strong> ${bd.usuarios[i].nombre}</p>
                    <p> Fecha: ${bd.usuarios[i].deuda.pagos[j].fecha}</p>
                    <p> Pago de: ${bd.usuarios[i].deuda.pagos[j].cantidad}</p>
                    </div>
                    `
            for(var j in bd.usuarios[i].deuda.cobros)
                if(bd.usuarios[i].deuda.cobros[j].fecha == fechaf)
                    txt2+=
                    `
                    <div class="card">
                    <p> <strong>Nombre:</strong> ${bd.usuarios[i].nombre}</p>
                    <p> Fecha: ${bd.usuarios[i].deuda.cobros[j].fecha}</p>
                    <p> Cobro de: ${bd.usuarios[i].deuda.cobros[j].cantidad}</p>
                    </div>
                    `
    document.getElementById("divusuario").innerHTML="";
    document.getElementById("divcobros").innerHTML=txt;
    document.getElementById("divpagos").innerHTML=txt2;

})