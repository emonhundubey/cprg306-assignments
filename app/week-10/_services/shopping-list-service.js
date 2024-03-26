import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const addOneItems = async (userId, item) => {
    try {
      const updateItem = { ...item, quantity: +item.quantity };
      const newItem = await addDoc(
        collection(db, "users", userId, "items"),
        updateItem
      );
      return newItem.id;
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  };
  
  export const getOneItem = async (userId, itemId) => {
    try {
      const docRef = doc(db, "users", userId, "items", itemId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return { id: docSnap.id, data: docSnap.data() };
      } else {
        return null; 
      }
    } catch (error) {
      console.error("Error getting item:", error);
      throw error;
    }
  };
  