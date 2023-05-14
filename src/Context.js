//* Packages import */
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
//* Firebase import */
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const Context = createContext();
const FansContext = ({ children }) => {
  const [user, setUser] = useState(null);
 const [alert,setAlert] = useState({
    open:false,
    message:"",
    type:"success"
    })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
      console.log(user);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (file) => {
        if (file.exists()) {
          console.log(file.data());
        } else {
          console.log("No such document!");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);



  return (
    <Context.Provider
      value={{ user, setUser, alert,setAlert }}
    >
      {children}
    </Context.Provider>
  );
};


export default FansContext;

export const useAuth = () => useContext(Context);
