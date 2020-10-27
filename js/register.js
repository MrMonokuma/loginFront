$("#btnRegistrar").click(function(e){
    e.preventDefault();
    var username=$("#us").val();
    var password=$("#pass").val();
    
    var obj={
        us: username,
        contra: password
    };

    registrarUsuario(obj);            
    }
);

 