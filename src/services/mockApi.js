const data = [
    {
        id: 1,
        nombre: "Crema Nutritiva Regeneradora",
        capacidad: "50ml",
        precio: 1500,
        categoria: "cremas",
        descripcion: "Con ácido hialurónico, colágeno, caléndula",
        img: "/Imagenes/cremas/crema_nutri_regeneradora.webp",
        stock: 40,
    },
    {
        id: 2,
        nombre: "Crema Exfoliante Facial",
        capacidad: "50ml",
        precio: 900,
        categoria: "cremas",
        descripcion: "A base de arcilla verde , almendras, lavanda, caléndula y geranio",
        img: "/Imagenes/cremas/crema_exfoliante_facial.webp",
        stock: 20,
    },
    {
        id: 3,
        nombre: "Crema Dental Natural",
        capacidad: "40ml",
        precio: 500,
        categoria: "cremas",
        descripcion: "Con arcilla blanca, aceite de coco, betaina de coco, Cristales de mentol y aceite esencial de menta",
        img: "/Imagenes/cremas/crema_dental.webp",
        stock: 30,
    },
    {
        id: 4,
        nombre: "Gel Corporal de Caléndula",
        capacidad: "1000ml",
        precio: 1800,
        categoria: "geles",
        descripcion: "Gel cicatrizante y antiséptico, cura heridas y regenera la piel.",
        img: "/Imagenes/geles/gel_calendula.webp",
        stock: 30,
    },
    {
        id: 5,
        nombre: "Gel Corporal de Aloe Vera",
        capacidad: "1000ml",
        precio: 2000,
        categoria: "geles",
        descripcion: "Con Aloe Vera, aceite esencial de geranio y Rosa Mosqueta",
        img: "/Imagenes/geles/gel_aloe_vera.webp",
        stock: 25,
    },
    {
        id: 6,
        nombre: "Gel de Colágeno, Elastina y Vitamina E",
        capacidad: "50gr",
        precio: 700,
        categoria: "geles",
        descripcion: "Con Aminoácidos y péptidos de colágeno y elastina, Vitamina E, acetato y Urea.",
        img: "/Imagenes/geles/gel_colageno.webp",
        stock: 35,
    },
];

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {
        let itemFind = data.filter((item) => {
            return item.categoria === cat
        });
        setTimeout(() => {
            console.log("filtramos",itemFind);
            if (itemFind) resolve(itemFind);
            else reject(new Error("Item no encontrado"));
        }, 2000);
    });
}

export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(idItem)});

        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("Item no encontrado"));
        }, 2000);
    });
}