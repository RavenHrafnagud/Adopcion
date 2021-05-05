
var capturadorPerros=document.getElementById("iconoPerro").checked;
var capturadorGatos=document.getElementById("iconoGato").checked;


if (capturadorPerros==true) {
    perros();
}


function perros(){

    var animal={
        tipo:"perro",
        sexo:"macho",
        nombre:"Rocky",
        raza:"Rottweller",
        edad:"3 meses",
        gps:"4140 Parker Rd. Allentown, New Mexico 31134",
        personalidad:{
            Cariñoso:"../img/tarjetas/carino.png",
            inquieto:"../img/tarjetas/inquieto.png",
            jugueton:"../img/tarjetas/jugueton.png"
        },
        historia:"Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada."
    }
    var imprimir=document.getElementById("casa");
    imprimir.innerHTML='<section id="perros"><div class="posisionCategorias"><div class="contenedorCategorias"><a href="./tarjetas.html"><img src="../img/tarjetas/rocky.png"></a><div class="centrado"><h5>'+animal.nombre+'</h5><span>'+animal.raza+'</span></div></div></div><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/chester.png"><div class="centrado"><h5>Chester</h5><span>Golden retriever</span></div></div></div><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/papi.png"><div class="centrado"><h5>Papi</h5><span>Chihuahua</span></div></div></div><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/Pelusa.png"><div class="centrado"><h5>Pelusa</h5><span>Bichón frisé</span></div></div></div></section>';

}
    
function gatos(){
    var imprimir=document.getElementById("casa");
    imprimir.innerHTML='<section id="gatos"><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/Matilde.png"><div class="centrado"><h5>Matilde</h5><span>British Shorthair</span></div></div></div><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/Pelusag.png"><div class="centrado"><h5>Pelusa</h5><span>Birmano</span></div></div></div><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/Kity.png"><div class="centrado"><h5>Kity</h5><span>Bombay</span></div></div></div><div class="posisionCategorias"><div class="contenedorCategorias"><img src="../img/tarjetas/Bombon.png"><div class="centrado"><h5>Bombón</h5><span>Gato americano</span></div></div></div></section>';
}