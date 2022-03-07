
let productsList = [
    {   
        id: '1',
        name: 'Lapicera Bic',
        description: 'Lapicera azul marca Bic',
        cod: 0,
        img: 'https://alohamaxikiosco.com.ar/wp-content/uploads/2020/07/bic.jpg',
        price: 70,
        stock: 100
    },
    {   
        id: '2',
        name: 'Marcadores Sharpie',
        description: 'Marcadores Sharpie x12',
        cod: 0,
        img: 'https://http2.mlstatic.com/D_NQ_NP_711777-MLA44240943968_122020-W.jpg',
        price: 700,
        stock: 400
    },
    {   
        id: '3',
        name: 'Lapices de Colores',
        description: 'Lapices de colores ',
        cod: 0,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/261/715/products/lata-fc-final1-fdb335c5ea85348c8b15954203378140-1024-1024.png',
        price: 1200,
        stock: 600
    },
    {   
        id: '4',
        name: 'Mochila Mickey',
        description: 'Mochila para niño/a de Mickey',
        cod: 0,
        img: 'https://m.media-amazon.com/images/I/81VR4OPuzoL.jpg',
        price: 1600,
        stock: 60
    },
    
];

function addProduct(name, description, price, img, cod, stock){
    const findId = productsList.map(item => item.id); 
    let newId; 
    if(findId.length == 0) newId = 1; 
    else newId = Math.max.apply(null, findId) + 1;

    const newProduct = {
        id: newId,
        name: name,
        description: description,
        price: price,
        img: img,
        cod: cod,
        stock: stock
    };

    productsList.push(newProduct);
}

function getById(id){
    return productsList.find(e => e.id === id);
}

function getAll(){
    return productsList;
}

function updateByIndex(productIndex, name, description, price, img, cod, stock){
    const newProduct = {
        ...productsList[productIndex],
        name: name,
        description: description,
        price: price,
        img: img,
        cod: cod,
        stock: stock,
    };
    productsList[productIndex] = newProduct;
    return newProduct;
}

function deleteByIndex(productIndex){
    productsList.splice(productIndex, 1);
}

module.exports = {
    productsList,
    getAll,
    getById,
    addProduct,
    updateByIndex,
    deleteByIndex,
};