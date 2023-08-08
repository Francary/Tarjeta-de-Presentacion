let nombreCompleto = "Perla Carvajal";
let direccion = "Buenos Aires , Argentina ";
let resumen = 'Francary esta continuamente adquiriendo conocimientos para enfrentar los desafios diarios . Actualmente estudiando programacion por Hobby';

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

var llamarArray = 0;




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

function limpiar(){
    const formNombre = document.getElementById('actualizarNombre');
    formNombre.value = "";

    const formUbicacion = document.getElementById('actualizarDireccion');
    formUbicacion.value = "";
    
    const formDescripcion = document.getElementById('actualizarDescripcion');
    formDescripcion.value = "";

    const formInstagram = document.getElementById('actualizarInstagram');
    formInstagram.value = "";

    const formGithub = document.getElementById('actualizarGithub');
    formGithub.value = "";

    const formTwitter = document.getElementById('actualizarTwitter');
    formTwitter.value = "";

    const formTiktok = document.getElementById('actualizarTiktok');
    formTiktok.value = "";
}


function instagram2(){
    if (document.getElementById('checkInstagram').checked){
    document.getElementById('instagram').style.display = 'block';}
    else {
        document.getElementById('instagram').style.display = 'none';
      }
}

function github2(){
    if (document.getElementById('checkGithub').checked){
    document.getElementById('github').style.display = 'block';}
    else {
        document.getElementById('github').style.display = 'none';
      }
}

function twitter2(){
    if (document.getElementById('checkTwitter').checked){
    document.getElementById('twitter').style.display = 'block';}
    else {
        document.getElementById('twitter').style.display = 'none';
      }
}

function tiktok2(){
    if (document.getElementById('checkTiktok').checked){
    document.getElementById('tiktok').style.display = 'block';}
    else {
        document.getElementById('tiktok').style.display = 'none';
      }
}

function color2(){
    document.getElementById('fondo').style.borderBottomColor = '#8ECAE6' ;
    document.getElementById('avatar').style.backgroundColor = '#8ECAE6' ;
    document.getElementById('fondo').style.backgroundColor = "#219EBC";
    document.getElementById('card').style.backgroundColor = '#023047';
    document.getElementById('formEditar').style.backgroundColor = '#023047';

    const editElement = document.getElementById('edit');
    editElement.addEventListener('mouseover', function() {
        // Cambia el color de relleno cuando el ratón está sobre el elemento
        editElement.style.fill = '#FFB703';
    });
    editElement.addEventListener('mouseout', function() {
        // Vuelve al color de relleno inicial cuando el ratón sale del elemento
        editElement.style.fill = 'white';
    });


    const svgElement = document.getElementById('miSvg1');

    // Añadimos el evento "mouseover"
    svgElement.addEventListener('mouseover', function() {
        // Cambia el color de relleno del SVG cuando el ratón está sobre él
        svgElement.style.fill = '#FFB703';
    });

    // Añadimos el evento "mouseout"
    svgElement.addEventListener('mouseout', function() {
        // Vuelve al color de relleno inicial cuando el ratón sale del SVG
        svgElement.style.fill = 'white';
    });

    const svgElement2 = document.getElementById('miSvg2');
    svgElement2.addEventListener('mouseover', function() {
        svgElement2.style.fill = '#FFB703';
    });
    svgElement2.addEventListener('mouseout', function() {
        svgElement2.style.fill = 'white';
    });

    const svgElement3 = document.getElementById('miSvg3');
    svgElement3.addEventListener('mouseover', function() {
        svgElement3.style.fill = '#FFB703';
    });
    svgElement3.addEventListener('mouseout', function() {
        svgElement3.style.fill = 'white';
    });

    const svgElement4 = document.getElementById('miSvg4');
    svgElement4.addEventListener('mouseover', function() {
        svgElement4.style.fill = '#FFB703';
    });
    svgElement4.addEventListener('mouseout', function() {
        svgElement4.style.fill = 'white';
    });


    document.getElementById('miFooter').style.backgroundColor = '#FB8500'
    document.body.style.color = 'white';
  

    console.log('Hola')
}



function color3(){
    document.getElementById('fondo').style.borderBottomColor = '#D3F8E2' ;
    document.getElementById('avatar').style.backgroundColor = '#D3F8E2' ;
    document.getElementById('fondo').style.backgroundColor = "#E4C1F9";
    document.getElementById('card').style.backgroundColor = '#F694C1';
    document.getElementById('formEditar').style.backgroundColor = '#F694C1';

    const editElement = document.getElementById('edit');
    editElement.addEventListener('mouseover', function() {
        editElement.style.fill = '#EDE7B1';
    });
    editElement.addEventListener('mouseout', function() {
        editElement.style.fill = 'white';
    });


    const svgElement = document.getElementById('miSvg1');
    svgElement.addEventListener('mouseover', function() {
        svgElement.style.fill = '#EDE7B1';
    });
    svgElement.addEventListener('mouseout', function() {
         svgElement.style.fill = 'white';
    });

    const svgElement2 = document.getElementById('miSvg2');
    svgElement2.addEventListener('mouseover', function() {
        svgElement2.style.fill = '#EDE7B1';
    });
    svgElement2.addEventListener('mouseout', function() {
        svgElement2.style.fill = 'white';
    });

    const svgElement3 = document.getElementById('miSvg3');
    svgElement3.addEventListener('mouseover', function() {
        svgElement3.style.fill = '#EDE7B1';
    });
    svgElement3.addEventListener('mouseout', function() {
        svgElement3.style.fill = 'white';
    });

    const svgElement4 = document.getElementById('miSvg4');
    svgElement4.addEventListener('mouseover', function() {
        svgElement4.style.fill = '#EDE7B1';
    });
    svgElement4.addEventListener('mouseout', function() {
        svgElement4.style.fill = 'white';
    });

    document.getElementById('miFooter').style.backgroundColor = '#A9DEF9'
    document.body.style.color = 'black';
}

function color4(){
    document.getElementById('fondo').style.borderBottomColor = '#F79256' ;
    document.getElementById('avatar').style.backgroundColor = '#F79256' ;
    document.getElementById('fondo').style.backgroundColor = "#FBD1A2";
    document.getElementById('card').style.backgroundColor = '#7DCFB6';
    document.getElementById('formEditar').style.backgroundColor = '#7DCFB6';

    const editElement = document.getElementById('edit');
    editElement.addEventListener('mouseover', function() {
        editElement.style.fill = '#00B2CA';
    });
    editElement.addEventListener('mouseout', function() {
        editElement.style.fill = 'white';
    });


    const svgElement = document.getElementById('miSvg1');
    svgElement.addEventListener('mouseover', function() {
        svgElement.style.fill = '#00B2CA';
    });
    svgElement.addEventListener('mouseout', function() {
         svgElement.style.fill = 'white';
    });

    const svgElement2 = document.getElementById('miSvg2');
    svgElement2.addEventListener('mouseover', function() {
        svgElement2.style.fill = '#00B2CA';
    });
    svgElement2.addEventListener('mouseout', function() {
        svgElement2.style.fill = 'white';
    });

    const svgElement3 = document.getElementById('miSvg3');
    svgElement3.addEventListener('mouseover', function() {
        svgElement3.style.fill = '#00B2CA';
    });
    svgElement3.addEventListener('mouseout', function() {
        svgElement3.style.fill = 'white';
    });

    const svgElement4 = document.getElementById('miSvg4');
    svgElement4.addEventListener('mouseover', function() {
        svgElement4.style.fill = '#00B2CA';
    });
    svgElement4.addEventListener('mouseout', function() {
        svgElement4.style.fill = 'white';
    });

    document.getElementById('miFooter').style.backgroundColor = '#1D4E89'
    document.body.style.color = 'black';
}

function color1(){
    document.getElementById('fondo').style.borderBottomColor = '#606C38' ;
    document.getElementById('avatar').style.backgroundColor = '#606C38' ;
    document.getElementById('fondo').style.backgroundColor = "#283618";
    document.getElementById('card').style.backgroundColor = '#FEFAE0';
    document.getElementById('formEditar').style.backgroundColor = '#FEFAE0';

    const editElement = document.getElementById('edit');
    editElement.addEventListener('mouseover', function() {
        editElement.style.fill = '#DDA15E';
    });
    editElement.addEventListener('mouseout', function() {
        editElement.style.fill = 'white';
    });


    const svgElement = document.getElementById('miSvg1');
    svgElement.addEventListener('mouseover', function() {
        svgElement.style.fill = '#DDA15E';
    });
    svgElement.addEventListener('mouseout', function() {
         svgElement.style.fill = 'white';
    });

    const svgElement2 = document.getElementById('miSvg2');
    svgElement2.addEventListener('mouseover', function() {
        svgElement2.style.fill = '#DDA15E';
    });
    svgElement2.addEventListener('mouseout', function() {
        svgElement2.style.fill = 'white';
    });

    const svgElement3 = document.getElementById('miSvg3');
    svgElement3.addEventListener('mouseover', function() {
        svgElement3.style.fill = '#DDA15E';
    });
    svgElement3.addEventListener('mouseout', function() {
        svgElement3.style.fill = 'white';
    });

    const svgElement4 = document.getElementById('miSvg4');
    svgElement4.addEventListener('mouseover', function() {
        svgElement4.style.fill = '#DDA15E';
    });
    svgElement4.addEventListener('mouseout', function() {
        svgElement4.style.fill = 'white';
    });

    document.getElementById('miFooter').style.backgroundColor = '#BC6C25'
    document.body.style.color = 'black';
}