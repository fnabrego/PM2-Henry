class CarritoCompra {
    constructor(){
        this.productos = [];
    }
    agregarProducto(producto) {
        //funcion de agregar producto
        this.productos.push(producto);
    }
    calcularTotal() {
        //sumatoria del total
        const total = this.productos.reduce((acumulador, producto) => {
            return acumulador + producto.precio;
        }, 0);
        return total;
    }
    aplicarDescuento(porcentaje) {
        //calculo del porcentaje de descuento
        const total = this.calcularTotal();
        const descuento = (porcentaje/100)*total;
        return (total - descuento);
    }
}
module.exports = CarritoCompra;