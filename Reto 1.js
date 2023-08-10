let nombreCompleto = "Francary Molina";
let direccion = " El Vigia , Venezuela ";
let resumen = 'Adquiriendo conocimientos constantemente para enfrentar los desafios diarios . Actualmente estudiando programacion por Hobby';

let instagram = "https://www.instagram.com/francarymolinapaez/";
let github = "https://github.com/Francary";
let twitter = "https://twitter.com/FrancaryMolina";
let tiktok ="https://www.tiktok.com/@tomy2514";

let bandera0 = 'Image/Banderas de America del Sur/Bandera de Argentina.svg';
let bandera1 = 'Image/Banderas de America del Sur/Bandera de Brasil.svg';
let bandera2 = 'Image/Banderas de America del Sur/Bandera de Bolivia.svg';
let bandera3 = 'Image/Banderas de America del Sur/Bandera de Colombia.svg';
let bandera4 = 'Image/Banderas de America del Sur/Bandera de Chile.svg';
let bandera5 = 'Image/Banderas de America del Sur/Bandera de Ecuador.svg';
let bandera6 = 'Image/Banderas de America del Sur/Bandera de Peru.svg';
let bandera7 = 'Image/Banderas de America del Sur/Bandera de Uruguay.svg';
let bandera8 = 'Image/Banderas de America del Sur/Bandera de Venezuela.svg';
const banderas = [bandera0,bandera1,bandera2,bandera3,bandera4,bandera5,bandera6,bandera7,bandera8];
var llamarArray = 8;

const paleta0 = ['#606C38','#283618','#FEFAE0','#DDA15E','#BC6C25','black'];
const paleta2 = ['#8ECAE6','#219EBC','#023047','#FFB703','#FB8500','white'];
const paleta3 = ['#D3F8E2','#E4C1F9','#F694C1','#EDE7B1','#A9DEF9','black'];
const paleta4 = ['#F79256','#FBD1A2','#7DCFB6','#00B2CA','#1D4E89','black'];


const nombre = document.getElementById('nombre');
nombre.innerHTML = nombreCompleto;

const ubicacion = document.getElementById('direccion');
ubicacion.innerHTML = direccion;

const pais = document.getElementById('bandera');
pais.src = banderas[llamarArray];

const descripcion = document.getElementById('descripcion');
descripcion.innerHTML = resumen;

const urlInsagran = document.getElementById('instagram');
urlInsagran.href = instagram;

const urlGithub = document.getElementById('github');
urlGithub.href = github;

const urlTwitter = document.getElementById('twitter');
urlTwitter.href = twitter;

const urlTiktok = document.getElementById('tiktok');
urlTiktok.href = tiktok;





function guardar() {
    if (document.getElementById('actualizarNombre').value !="" && document.getElementById('actualizarDireccion').value !="" && document.getElementById('actualizarDescripcion').value !=""){
    
    nombreCompleto = document.getElementById('actualizarNombre').value
    const nombre = document.getElementById('nombre');
    nombre.innerHTML = nombreCompleto;

    const pais = document.getElementById('bandera');
    pais.src = banderas[document.getElementById('actualizarBandera').value];

    direccion = document.getElementById('actualizarDireccion').value
    const ubicacion = document.getElementById('direccion');
    ubicacion.innerHTML = direccion;

    resumen = document.getElementById('actualizarDescripcion').value
    const descripcion = document.getElementById('descripcion');
    descripcion.innerHTML = resumen;

    instagram = document.getElementById('actualizarInstagram').value
    const urlInstagram = document.getElementById('instagram');
    urlInstagram.href = instagram;

    github = document.getElementById('actualizarGithub').value
    const urlGithub = document.getElementById('github');
    urlGithub.href = github;

    twitter = document.getElementById('actualizarTwitter').value
    const urlTwitter = document.getElementById('twitter');
    urlTwitter.href = twitter;

    tiktok = document.getElementById('actualizarTiktok').value
    const urlTiktok = document.getElementById('tiktok');
    urlTiktok.href = tiktok;
    

    document.getElementById('formEditar').style.display = 'none'    
    }
    else{
        alert("Debe Completar todos los Campos")
    }
}


function actualizar() {
     guardar()
     document.getElementById('formEditar').style.display = 'block'    
}

function edit(){
    document.getElementById('formEditar').style.display = 'block'
   
    const formNombre = document.getElementById('actualizarNombre');
    formNombre.value = nombreCompleto;

    const formUbicacion = document.getElementById('actualizarDireccion');
    formUbicacion.value = direccion;
    
    const formDescripcion = document.getElementById('actualizarDescripcion');
    formDescripcion.value = resumen;

    const formInstagram = document.getElementById('actualizarInstagram');
    formInstagram.value = instagram;

    const formGithub = document.getElementById('actualizarGithub');
    formGithub.value = github;

    const formTwitter = document.getElementById('actualizarTwitter');
    formTwitter.value = twitter;

    const formTiktok = document.getElementById('actualizarTiktok');
    formTiktok.value = tiktok;
    
    
} 

function cerrar(){
    document.getElementById('formEditar').style.display = 'none'

 
}

const arrayBorrar = ['actualizarNombre','actualizarDireccion','actualizarDescripcion','actualizarInstagram','actualizarGithub','actualizarTwitter','actualizarTiktok']

function borrarTodo(id){
    const formBorrar = document.getElementById(id);
    formBorrar.value = ""
}

function limpiar(){
  for ( let i = 0; i < arrayBorrar.length; i++){
    borrarTodo(arrayBorrar[i])
  }
}

function redesSociales(valorRedes){
     vr =   valorRedes ;
    if (document.getElementById(vr+"2").checked){
    document.getElementById(vr).style.display = 'block';}
    else {
        document.getElementById(vr).style.display = 'none';
      }   
}
function svgForm(valorID){
    const svgFormColor = document.getElementById(valorID);
    svgFormColor.style.fill = arrayPaleta[5];
} 

function color(paletaColors){
    arrayPaleta = paletaColors;

    document.getElementById('fondo').style.borderBottomColor = arrayPaleta[0] ;
    document.getElementById('avatar').style.backgroundColor = arrayPaleta[0] ;
    document.getElementById('fondo').style.backgroundColor = arrayPaleta[1];
    document.getElementById('card').style.backgroundColor = arrayPaleta[2];
    document.getElementById('formEditar').style.backgroundColor = arrayPaleta[2];

    for (let i = 1; i <= 8; i++) {
        svgForm(`miSvg${i}`);
      }

    const editElement = document.getElementById('edit');
    editElement.addEventListener('mouseover', function() {
        // Cambia el color de relleno cuando el ratón está sobre el elemento
        editElement.style.fill = arrayPaleta[3];
    });
    editElement.addEventListener('mouseout', function() {
        // Vuelve al color de relleno inicial cuando el ratón sale del elemento
        editElement.style.fill = arrayPaleta[5];
    });

    function agregarEventosHover(valor) {
        const svgElement = document.getElementById(valor);
         
        svgElement.addEventListener('mouseover', function() {
          svgElement.style.fill = arrayPaleta[3];
        });
      
        svgElement.addEventListener('mouseout', function() {
          svgElement.style.fill = arrayPaleta[5];
        });
      }
      
      // Iterar y agregar eventos a cada elemento SVG
      for (let i = 1; i <= 8; i++) {
        agregarEventosHover(`miSvg${i}`);
      }
 
    document.getElementById('miFooter').style.backgroundColor = arrayPaleta[4];
    document.body.style.color = arrayPaleta[5];
}