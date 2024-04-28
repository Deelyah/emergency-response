import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
export const createProfile = async (uid, data) => {
  try {
    const profile = collection(db, 'profile');
    const docRef = await setDoc(doc(profile, uid), {
      data: data
    });
    console.log(docRef, "Here's your profile");
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (uid) => {
  try {
    const docRef = doc(db, 'profile', uid);
    const docSnap = await getDoc(docRef);
    localStorage.setItem('profile', JSON.stringify(docSnap.data()));
    console.log(docSnap.data(), "Here's your profile");
  } catch (error) {
    console.log(error);
  }
};
