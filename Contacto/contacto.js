function mostrar(){
    var name = document.getElementById("nombre").value;
    var ap = document.getElementById("apellido").value;
    var mail = document.getElementById("email").value;
    var comment = document.getElementById("comentario").value;
    var str = " Gracias "+ name + " " + ap + ". Enviaremos una respuesta al correo: " + mail +". Tu comentario fue: " + comment;
    if (name!=""){
        if(ap!=""){
            if(mail!=""){
        alert(str);
       }
    }
}
    
}