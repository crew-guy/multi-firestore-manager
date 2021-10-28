import { db,db2 } from './db'
import { collection, doc, query, where, setDoc, getDocs } from "firebase/firestore";
import {v4 as uuid} from 'uuid'

const scriptingFunc = async () => {
  const q = await query(collection(db, "institutes"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (document: any) => {
    let instiImages:any = []
    let prevDocs:any =[]
    document.data().instiImages.forEach((img: string) => 
      instiImages.push({
        id: uuid(),
        imgName:img
      })
    )
    const docS3 = document.data().instiS3FolderName
    console.log(docS3)
    const updatedDoc = {
      ...document.data(),
      instiImages
    }
    console.log(updatedDoc)
    await setDoc(doc(db2, "institutes", uuid()), updatedDoc)
    console.log('added this doc')
    // await setDoc(doc(db, "institutes",where("instiS3FolderName", "==", docS3)), updatedDoc);
    
   })
    // doc.data() is never undefined for query doc snapshots
    
}

scriptingFunc()