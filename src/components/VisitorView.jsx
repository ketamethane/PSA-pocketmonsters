import React, { useState, useEffect } from "react";
import {
  setDoc,
  getDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from "../api/firebase-config";

const VisitorView = () => {
  const [visitors, setVisitors] = useState([]);
  const visitorRef = async () => {
    const response = await getDoc(doc(db, "users/dO066zlSg8T7XvoZNttx"));
    return response;
  }

  useEffect(() => {
    visitorRef().then(response => setVisitors({
      id: response.get("id"),
      role: response.get("role")
    }));
  }, [])
  
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Overview of Visitors</h2>
      <p>
        {JSON.stringify(visitors)}
      </p>
    </>
  )
}

export default VisitorView;