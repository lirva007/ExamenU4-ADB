// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUobzmx__y0r8w0cPMlBRF9NOq2c7oygg",
    authDomain: "unidad4adbd-e5f6f.firebaseapp.com",
    databaseURL: "https://unidad4adbd-e5f6f-default-rtdb.firebaseio.com",
    projectId: "unidad4adbd-e5f6f",
    storageBucket: "unidad4adbd-e5f6f.appspot.com",
    messagingSenderId: "246143247170",
    appId: "1:246143247170:web:15098232bf8bb76e305edb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//obtener datos del html

  
var txtUsuario = document.getElementById("usuario");
var txtMensaje = document.getElementById("mensaje");
var btnEnviar = document.getElementById("btnenviar");
var chatlista = document.getElementById("chatlista");

//Ejecutar accion en el boton
btnEnviar.addEventListener("click",function(){
  var usuario = txtUsuario.value;
  var mensaje = txtMensaje.value;
  var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

  chatlista.innerHTML += html;

  firebase.database().ref('chat').push({
      user: usuario,
      message: mensaje
  })
});

/*Mostrar datos*/
firebase.database().ref('chat').on('value', (snapshot) => {
  var html1 = '';
  //console.log(snapshot.val());
  snapshot.forEach(function (e){
    var elemento = e.val();
    var usuario1 = elemento.user;
    var mensaje1 = elemento.message;
    html1 += "<li>"+usuario1+" dice: "+mensaje1+"</li>";
  });
  chatlista.innerHTML = html1;
})