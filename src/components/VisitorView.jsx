import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  setDoc,
  getDocs,
  doc,
  deleteDoc,
  collection,
} from 'firebase/firestore';

import { db } from "../api/firebase-config";
import VisitorCard from "./VisitorCard";

const VisitorView = () => {
  const [visitors, setVisitors] = useState([]);
  const visitorRef = async () => {
    const response = await getDocs(collection(db, "users"));
    const result = [];
    response.docs.map(item => {
      result.push({
        id: item.get("id"),
        role: item.get("role")
      })
    });
    return result;
  }

  useEffect(() => {
    visitorRef().then(response => setVisitors(response));
  }, [])
  
  return (
    <>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center' }}
      >
        Overview of Visitors
      </Typography>
      <p>
        {JSON.stringify(visitors)}
      </p>
      {
        visitors.map((item, idx) => {
          return (
            <div key={idx}>
              <VisitorCard visitor={item}/>
            </div>
          )
        })
      }
    </>
  )
}

export default VisitorView;