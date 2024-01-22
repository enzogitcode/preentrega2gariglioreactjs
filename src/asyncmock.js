const productos = [
    { id: "1", nombre: "Pavlova", precio: 500, img: "../imgs/pavlova.webp", idCat: "Tortas" },
    { id: "2", nombre: "Torta Oreo", precio: 180, img: "../imgs/tortaoreo", idCat: "Tortas" },
    { id: "3", nombre: "Medialunas rellenas", precio: 200, img: "", idCat: "Laminados" },
    { id: "4", nombre: "Medialunas", precio: 1100, img: "../imgs/medialunas.webp", idCat: "Laminados" },
    { id: "5", nombre: "Rogel", precio: 1100, img: "../imgs/rogel.jpg", idCat: "Torta" },]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}