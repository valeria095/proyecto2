/* Librerías */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/* Archivos de proyecto */
import './css/style.css'

import { 
    calcularTotal,
    comprarProducto, 
    eliminarProducto, 
    eliminarProductoCompra, 
    leerLocalStorage, 
    leerLocalStorageCompra, 
    obtenerEvento, 
    procesarPedido, 
    vaciarCarrito
} from './src/carrito'

const productos = document.getElementById('lista-productos')
//console.log(productos)
const carrito = document.getElementById('carrito')
// console.log(carrito)
const carritoCompra = document.getElementById('lista-compra')

cargarEventos()

function cargarEventos() {

    const ruta = String(location.href)
    console.log(ruta)
    
    if ( !ruta.includes('carrito.html') ) {
        esIndex()
    } else {
        esCarrito()
    }

}

function esIndex() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    // Se ejecuta cuando presiono sobre el botón comprar
    productos.addEventListener('click', (e) => comprarProducto(e))

    // Al cargar el documento se muestra lo almacenado en el LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage())

    //Cuando se elimina un producto del carrito
    carrito.addEventListener('click', e => eliminarProducto(e))

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))

    // Enviar pedido a otra página
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}

function esCarrito() {
    console.log('Estoy en carrito')
    // Voy a leer el localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorageCompra())

    carritoCompra.addEventListener('click', e => eliminarProductoCompra(e))

    calcularTotal()

    carritoCompra.addEventListener('change', e => obtenerEvento(e))
    carritoCompra.addEventListener('keyup', e => obtenerEvento(e))
}
