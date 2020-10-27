var direccion="/cgi-bin/loginBack";
/**
 * 
 * @param {string} valor 
 */


function registrarUsuario(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/register.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/login/index.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 

}

function loginUsuario(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/login.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/login/index.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 
}

