const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
  
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it('Debería inicializar el carrito como un array vacío', () => {
    expect(carrito.productos).toEqual([]);
  });

  it('Debería agregar productos al carrito correctamente', () => {
    carrito.agregarProducto({ nombre: 'Producto1', precio: 50 });
    carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });

    expect(carrito.productos).toHaveLength(2);
  });

  it('Debería calcular el total de la compra correctamente', () => {
    carrito.agregarProducto({ nombre: 'Producto1', precio: 50 });
    carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });

    const total = carrito.calcularTotal();

    expect(total).toBe(80);
  });

  it('Debería aplicar el descuento correctamente', () => {
    carrito.agregarProducto({ nombre: 'Producto1', precio: 50 });
    carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });

    const totalConDescuento = carrito.aplicarDescuento(10);

    expect(totalConDescuento).toBe(72);
  });

  it('Debería aplicar el descuento de 0% correctamente', () => {
    carrito.agregarProducto({ nombre: 'Producto1', precio: 50 });
    carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });

    const totalConDescuento = carrito.aplicarDescuento(0);

    expect(totalConDescuento).toBe(80);
  });
});
