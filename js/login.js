$("#Ingresar").click(function(e){
    e.preventDefault();
    var username=$("#us").val();
    var password=$("#pass").val();

    var obj={
        us: username,
        contra: password
    };
    
    loginUsuario(obj)
});