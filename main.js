//El costo de los chocolates estan en moneda de Perú
let chockPasas, chockAlmendra = 20
let chockMani, Nibs = 22
let elegirProducto = Number (prompt ("seleccione Chock con pasas = 1, Chock con pasas = 2, Nibs de cacao = 3, Chock con almendra = 4"))

function cantidad(){
if( elegirProducto == "1"){
    let cantidad = prompt("Cuantos kilos desea comprar")
        alert ("El costo es "+(chockPasas*cantidad)+" soles")
}
else if( elegirProducto == "2"){
    let cantidad = prompt("Cuantos kilos desea comprar")
        alert("El costo es "+(chockMani*cantidad)+" soles")
}
else if( elegirProducto == "3"){
    let cantidad = prompt("Cuantos kilos desea comprar")
        alert("El costo es "+(Nibs*cantidad)+" soles")
}
else if( elegirProducto == "4"){
    let cantidad = prompt("Cuantos kilos desea comprar")
        alert("El costo es "+(chockAlmendra*cantidad)+" soles")
}
}
cantidad()

class Productos{
    constructor(nombre, peso, cantidadDisponible, PorcentajeChock){
    this.nombre = nombre;
    this.peso = peso;
    this.cantidadDisponible = cantidadDisponible;
    this.PorcentajeChock = PorcentajeChock;
    }
}

const chockManis = new Productos("Chock Mani","1K",10,"40%")
const chockPasa = new Productos("Chock Pasas","1K",15,"40%")
const Nib = new Productos("Nibs","1K",12,"40%")
const chockAlmendras = new Productos("Chock Almendra","1K",20,"60%")

const productos = [];
productos.push(chockManis,chockPasa,Nib,chockAlmendras);

for(const elemento of productos){
    console.log(productos)
}