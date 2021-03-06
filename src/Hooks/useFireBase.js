import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";


const useFireBase=()=>{
    const auth=getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({});
    const signInWithGoogle=()=>{
        signInWithPopup(auth, googleProvider).then((res) => {
          const user = res.user;
          setUser(user);
          console.log(user);
        });
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{})
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
    },[]);

    return {user,signInWithGoogle,handleSignOut};
}
export default useFireBase;