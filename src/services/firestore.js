import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdPkUW1E-Ua8NoFfC7Qi0pB4mEddVxzWA",
  authDomain: "reactcoderzala.firebaseapp.com",
  projectId: "reactcoderzala",
  storageBucket: "reactcoderzala.appspot.com",
  messagingSenderId: "578724664336",
  appId: "1:578724664336:web:b99941bfe2f8075bc86695"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const colleccionRef = collection(firestore, "productos");
  let snapshotBD = await getDocs(colleccionRef);

  let dataDocs = snapshotBD.docs.map(documento => {
    let docFormateado = {
      ...documento.data(),
      id: documento.id
    }
    return docFormateado;
  });

  return dataDocs;
}

export async function getSingleItem(idParams) {
  try {
    const docRef = doc(firestore, "productos", idParams);
    const docSnapshot = await getDoc(docRef);
    return {
      ...docSnapshot.data(),
      id: docSnapshot.id
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const colleccionRef = collection(firestore, "productos");
  const queryCategory = query(
    colleccionRef, where("categoria", "==", catParams));

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map(documento => {
    let docFormateado = {
      ...documento.data(),
      id: documento.id
    }

    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {

  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

// export async function exportDataTofirestore() {
//   const data = [{
//       id: 1,
//       nombre: "Crema Nutritiva Regeneradora",
//       capacidad: "50ml",
//       precio: 1500,
//       categoria: "cremas",
//       descripcion: "Con ácido hialurónico, colágeno, caléndula",
//       img: "/Imagenes/cremas/crema_nutri_regeneradora.webp",
//       stock: 40,
//     },
//     {
//       id: 2,
//       nombre: "Crema Exfoliante Facial",
//       capacidad: "50ml",
//       precio: 900,
//       categoria: "cremas",
//       descripcion: "A base de arcilla verde , almendras, lavanda, caléndula y geranio",
//       img: "/Imagenes/cremas/crema_exfoliante_facial.webp",
//       stock: 20,
//     },
//     {
//       id: 3,
//       nombre: "Crema Dental Natural",
//       capacidad: "40ml",
//       precio: 500,
//       categoria: "cremas",
//       descripcion: "Con arcilla blanca, aceite de coco, betaina de coco, Cristales de mentol y aceite esencial de menta",
//       img: "/Imagenes/cremas/crema_dental.webp",
//       stock: 30,
//     },
//     {
//       id: 4,
//       nombre: "Gel Corporal de Caléndula",
//       capacidad: "1000ml",
//       precio: 1800,
//       categoria: "geles",
//       descripcion: "Gel cicatrizante y antiséptico, cura heridas y regenera la piel.",
//       img: "/Imagenes/geles/gel_calendula.webp",
//       stock: 30,
//     },
//     {
//       id: 5,
//       nombre: "Gel Corporal de Aloe Vera",
//       capacidad: "1000ml",
//       precio: 2000,
//       categoria: "geles",
//       descripcion: "Con Aloe Vera, aceite esencial de geranio y Rosa Mosqueta",
//       img: "/Imagenes/geles/gel_aloe_vera.webp",
//       stock: 25,
//     },
//     {
//       id: 6,
//       nombre: "Gel de Colágeno, Elastina y Vitamina E",
//       capacidad: "50gr",
//       precio: 700,
//       categoria: "geles",
//       descripcion: "Con Aminoácidos y péptidos de colágeno y elastina, Vitamina E, acetato y Urea.",
//       img: "/Imagenes/geles/gel_colageno.webp",
//       stock: 35,
//     },
//   ];

//   const collectionRef = collection(firestore, "productos");

//   for (let item of data) {
//     delete item.id;
//     const newDoc = await addDoc(collectionRef, item);
//   }
// }

export default firestore;