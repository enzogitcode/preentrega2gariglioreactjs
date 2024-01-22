const productos = [
    { id: "1", nombre: "Pavlova", precio: 12000, img: "../imgs/pavlova.webp", idCat: "Tortas" },
    { id: "2", nombre: "Torta Oreo", precio: 14000, img: "../imgs/tortaoreo.jpg", idCat: "Tortas" },
    { id: "3", nombre: "Medialunas rellenas", precio: 200, img: "../imgs/medialunasrellenas.jpg", idCat: "Laminados" },
    { id: "4", nombre: "Medialunas", precio: 150, img: "../imgs/medialunas.webp", idCat: "Laminados" },
    { id: "5", nombre: "Rogel", precio: 1100, img: "../imgs/rogel.jpg", idCat: "Tortas" },
    { id: "6", nombre: "Tiramisú", precio: 10000, img: "../imgs/tiramisu.jpg", idCat: "Tortas"},
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}