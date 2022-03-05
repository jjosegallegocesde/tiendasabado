//arreglo de objetos

let productos=[
    {nombre:"Epiphone SG", precio:1600000,foto:'../img/img0.jpg',descripcion:"Puente fijo, 22 trastes, doble Hambucker"},
    {nombre:"Fender Stratocaster", precio:1400000, foto:"../img/img1.jpg", descripcion:"Puente Semi-Flotante, 21 trastes, triple Single-Coil"},
    {nombre:"Gibson Les Paul", precio:5000000, foto:'../img/img2.jpg', descripcion:"Puente fijo, 22 trastes, doble Hambucker"},
    {nombre:"Ephiphone casino", precio:3500000,foto:'../img/img3.jpg', descripcion:"Puente fijo, 22 trastes, doble P-90"},
    {nombre:"Fender Jazzmaster", precio:1500000, foto:'../img/img4.jpg', descripcion:"Puente Semi-Flotante, 21 trastes, doble P-90"},
    {nombre:"Gibson Flying-V", precio:5000000, foto:'../img/img5.jpg', descripcion:"Puente fijo, 22 trastes, doble Hambucker"},
    {nombre:"Ibanez Gio", precio:1200000, foto:'../img/img6.jpg', descripcion:"Puente flotante, 24 trastes, doble Hambucker"},
    {nombre:"B.C. Rich Warlock", precio:2500000, foto:'../img/img7.jpg', descripcion:"Puente flotante, 24 trastes, doble hambucker activos"},
    {nombre:"Fender Telecaster", precio:2000000, foto:'../img/img8.jpg', descripcion:"Puente fijo, 21 trastes, doble Single-Coil"},
    {nombre:"Taylor 814ce V-Class 2020", precio:16000000, foto:'../img/img9.jpg', descripcion:""},

]

//rrecorriendo un arreglo con js
//buscar/seleccionar/esculcar
productos.forEach(function(producto){
    console.log("SDVSF")
})

//escuchado clic en el boton
let boton=document.getElementById("boton")

//detectar el primer evento
boton.addEventListener("click",cambiarFoto)

//creando una funcion
function cambiarFoto(){

    let foto=document.getElementById("fotoPrueba")
    foto.src="../img/img4.jpg"
}