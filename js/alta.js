var bd = JSON.parse(localStorage.getItem("bd"));
if (!bd || bd==undefined||bd.login.is==false||bd.login.type!="propietario")
    location.replace("../login.html");

document.getElementById("btnsubmit").addEventListener("click",function(e){
    e.preventDefault();
    let nombre=document.getElementById("txtnombre").value;
    let telf=document.getElementById("txttelf").value;
    let email=document.getElementById("txtemail").value;
    let clave=document.getElementById("txtclave").value;

    bd.usuarios.push({nombre:nombre,telefono:telf,email:email,clave:clave,tipo:"deudor",deuda:{montototal:0,montopagado:0,pagos:[],cobros:[]}});
    localStorage["bd"] = JSON.stringify(bd);
    alert("Registro exitoso.")
});

