var bd = JSON.parse(localStorage.getItem("bd"));
if (!bd || bd==undefined||bd.login.is==false||bd.login.type!="propietario")
    location.replace("../login.html");
window.onload = function(){

    var txt="";
    for(let i in bd.usuarios)
        if(bd.usuarios[i].tipo=="deudor")
            txt+=`<option>${bd.usuarios[i].nombre}</option>`;
    
    document.getElementById("selector").innerHTML=txt;
    console.log(txt);

}
document.getElementById("btnsubmit").addEventListener("click",function(e) {
    e.preventDefault();
    var cant= 0;
    cant = parseInt(document.getElementById("txtcant").value);
    var sel=document.getElementById("selector").value;
    var f = new Date();
    const fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

    if(document.getElementById("chktodos").checked == false)
    {
        for(let i in bd.usuarios)
            if(bd.usuarios[i].nombre == sel)
            {
                bd.usuarios[i].deuda.montototal+=cant;
                bd.usuarios[i].deuda.cobros.push({fecha:fecha,cantidad:cant});
            }
    }
    else
        for(let i in bd.usuarios)
            if(bd.usuarios[i].tipo == "deudor")
            {
                bd.usuarios[i].deuda.montototal+= cant;
                bd.usuarios[i].deuda.cobros.push({fecha:fecha,cantidad:cant});
            }
    alert("Cobro exitoso");
    localStorage["bd"] = JSON.stringify(bd);
    
});

