var bd = JSON.parse(localStorage.getItem("bd"));
if (!bd ||bd==undefined){
    bd = 
    {
        login:{
            is:false,
            type:"deudor",
            userindex:null
        },
        usuarios:[
            {
                nombre: "propietarionombre",
                telefono: "propietario",
                clave: "123tamarindo",
                tipo :"propietario",
            },
            {
                nombre: "prueba",
                telefono: "3121231234",
                clave: "hola123",
                email: "asdasd@ucol.mx",
                tipo :"deudor",
                deuda:{
                    montototal:10000,
                    montopagado:2500,
                    pagos:[
                        {
                        fecha:"19/10/2020",
                        cantidad:2000
                        },
                        {
                            fecha:"19/11/2020",
                            cantidad:500
                        }
                    ],
                    cobros:[
                        {
                            fecha:"15/10/2020",
                            cantidad:10000
                        }
                    ]
                }
            }   
        ]
    }
}
localStorage["bd"] = JSON.stringify(bd);

document.getElementById("btnsubmit").addEventListener("click",function(e){
    e.preventDefault();
    var telef=document.getElementById("txttelefono").value;
    var clav=document.getElementById("txtpassword").value;
    bd = JSON.parse(localStorage.getItem("bd"));
    for(var i in bd.usuarios)
        if(telef == bd.usuarios[i].telefono)
            if(clav == bd.usuarios[i].clave)
            {
                bd.login.is = true;
                localStorage["bd"] = JSON.stringify(bd);
                bd.login.userindex = i;
                bd.login.type=bd.usuarios[i].tipo;
                if(bd.login.type == "propietario")
                    location.replace("vistaprop.html");
                else
                    location.replace("vistadeudor.html");
            }
    localStorage["bd"] = JSON.stringify(bd);
    if(bd.login.is == false)
        alert("Usuario y/o clave invalida, revise sus datos.");
    
});
