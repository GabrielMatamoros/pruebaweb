for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
function saludar(){
    var user = document.getElementById("txtUser").value;
    console.log("Hola " + user);
}
function sumar(){
    var n1 = parseInt(document.getElementById("txtUser").value);
    var n2 = parseInt(document.getElementById("txtPass").value);    

    alert("La suma es: " + (n1 + n2));
}