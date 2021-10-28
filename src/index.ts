import { db } from './db'
import { collection, doc, query, where, setDoc, getDocs, addDoc } from "firebase/firestore";
import {v4 as uuid} from 'uuid'

const scriptingFunc = async () => {
  const q = await query(collection(db, "institutes"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (document: any) => {
    // const [ instiLatitude, instiLongitude ] = document.data().instiCoords.split(',')
    // const instiMetaImage = document.data().instiImages[0]
    // const instiS3FolderName:string = document.data().instiS3FolderName
    // const updatedDoc = {
    //   ...document.data(),
    //   instiLatitude,
    //   instiLongitude,
    //   instiMetaImage
    // }
    // console.log(updatedDoc)

    //! Add a document to a firestore collection
    // await addDoc(collection(db, "institutes"),updatedDoc);
    // console.log('added this doc')

    //! Update a Firestore doc using its id
    // await setDoc(doc(db, "institutes", document.id), updatedDoc)
    
   })
    // doc.data() is never undefined for query doc snapshots
    
}

scriptingFunc()