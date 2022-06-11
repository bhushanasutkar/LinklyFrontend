import { createContext, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {


  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentuser) => {
      // console.log(currentuser);
      if(currentuser){
        // var token = await currentuser.getAuthResponse().id_token
        
        const token = await currentuser.getIdToken();
        // console.log(token);
      localStorage.setItem("token", token);
      localStorage.setItem("email", currentuser.email);
      localStorage.setItem("name", currentuser.displayName);
      localStorage.setItem("imgurl", currentuser.photoURL);
    
      }
      
      // const unsubscribe = onAuthStateChanged(auth,async (currentuser) => {      
      //     // const user = currentuser;
      //     console.log(currentuser);
      //     const token = await auth.currentUser.getToken();
      //     console.log("Hi");
      //   localStorage.setItem("token", token);
      //   setUser(currentuser.accessToken);
        

      
    
      // const unsubscribe = onAuthStateChanged(auth,async (currentuser) => {
      //     // const user = currentuser;
      //     await currentuser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      //       // Send token to your backend via HTTPS
      //       const token = idToken;
      //       localStorage.setItem("token", token);
      //       // ...
      //     }).catch(function(error) {
      //       // Handle error
      //     });
        
  });
    
    return () => {
      unsubscribe();
    };
  
  }, []);

  return (
    <userAuthContext.Provider
      value={{logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
