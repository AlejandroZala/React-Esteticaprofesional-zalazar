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

export default firestore;