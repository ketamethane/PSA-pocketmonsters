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
        lat: item.get("lat"),
        lng: item.get("lng"),
        role: item.get("role")
      })
    });
    return result;
  }

  useEffect(() => {
    visitorRef().then(response => setVisitors(response));
  }, []);

  return (
    <Box
      mx='auto'
      width='50%'
    >
      <Typography
        variant='h3'
        sx={{ textAlign: 'center' }}
      >
        Overview of Visitors
      </Typography>
      <p>
        {JSON.stringify(visitors)}
      </p>
      <Box
        // mx='auto'
        // width='100%'
      >
        {
          visitors.length > 0 && visitors.map((item, idx) => {
            return (
              <div key={idx} style={{ textAlign: 'center' }}>
                <VisitorCard visitor={item} />
                <VisitorCard visitor={item} />
              </div>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default VisitorView;