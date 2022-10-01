import React, { useState } from 'react';
import {
  collection,
  addDoc
} from 'firebase/firestore';

import { db } from "../api/firebase-config";

const VisitorEntryView = ({ toggleAddVisitor }) => {
  const [locationId, setLocationId] = useState("");
  const [userId, setUserId] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e) => {
    addVistor();
    e.preventDefault();
    // submitUser();
    alert(`You have submitted: ${locationId} and ${userId}`);
    // If success, else dont toggle
    toggleAddVisitor(() => false);
  }

  const addVistor = async () => {
    await addDoc(collection(db, "users"), {
      userId: userId,
      locationId: locationId,
      phoneNum: phoneNum,
      purpose: purpose,
    });
  }

  return (
    <div
      className='container'
      style={{
        display: 'block',
        textAlign: 'center',
        backgroundColor: 'green',
        maxWidth: '1000px',
        height: '400px',
        margin: 'auto',
        transform: 'translateY(50%)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '300px',
          marginTop: 'auto',
          marginBottom: 'auto'
        }}
      >
        <label style={{ display: 'block' }}>
          Enter Location ID:
          <input
            type='text'
            value={locationId}
            onChange={(e) => setLocationId(() => e.target.value)}
          />
        </label>
        <label style={{ display: 'block', marginTop: '0.8em' }}>
          Enter my ID:
          <input
            type='text'
            value={userId}
            onChange={(e) => setUserId(() => e.target.value)}
          />
        </label>
        <label style={{ display: 'block', marginTop: '0.8em' }}>
          Enter my phone number:
          <input
            type='text'
            value={phoneNum}
            onChange={(e) => setPhoneNum(() => e.target.value)}
          />
        </label>
        <label style={{ display: 'block', marginTop: '0.8em' }}>
          Enter purpose of visit:
          <input
            type='text'
            value={purpose}
            onChange={(e) => setPurpose(() => e.target.value)}
          />
        </label>
        <button
          disabled={locationId.length === 0 || userId.length === 0}
          style={{
            width: '200px',
            fontSize: 20,
            marginTop: '0.8em',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          onClick={handleSubmit}
        >
          Enter
        </button>
      </div>

    </div>
  )
}

export default VisitorEntryView;

// useEffect(() => {
//   const getFutureBookings = async () => {
//       const dummyBookings = []
//       const futureDate = new Date();
//       const futureDate2 = new Date();
//       futureDate2.setDate(futureDate2.getDate() + 14)
//       futureDate.setHours(0, 0, 0, 0)
//       futureDate2.setHours(0, 0, 0, 0)

//       const slotsAvail = query(collectionGroup(db, 'bookings'), where('date', '>=', futureDate), where('date', '<=', futureDate2));
//       const querySnapshot = await getDocs(slotsAvail);
//       // avoid asynchronous function within forEach. 
//       querySnapshot.forEach((docSnapshot) => {


//           var fsStartTime = docSnapshot.get('startTime')
//           var fsEndTime = docSnapshot.get('endTime')
//           var fsName = docSnapshot.get('name')
//           var parentDocID = docSnapshot.get('parentDocID')
//           var bookingReason = docSnapshot.get('bookingReason')
//           var jsStartTime = toTimeStr(fsStartTime)
//           var jsEndTime = toTimeStr(fsEndTime)
//           var label = toLabelString(fsName, jsStartTime, jsEndTime)
//           var dateText = toJSDateStr(fsStartTime.toDate())

//           var status = docSnapshot.get('status')
//           var uid = docSnapshot.get('useruid')
//           var displayName = docSnapshot.get('userDisplayName')
//           var email = docSnapshot.get('userEmail')
//           var userBookingID = docSnapshot.get('userBookingID')
//           var admin = docSnapshot.get('admin')
//           var adminID = docSnapshot.get('adminID')
//           var adminResponseTimeCheck = docSnapshot.get('adminResponseTime')
//           if (adminResponseTimeCheck == "") {
//               var adminResponseTime = ""
//           } else {
//               var adminResponseTime = toJSDateStr(adminResponseTimeCheck.toDate()) + ", " + toTimeStr(adminResponseTimeCheck)
//           }

//           var key = dateText + " " + label

//           dummyBookings.push({
//               key: key, label: label, dateText: dateText,
//               value: {
//                   id: docSnapshot.id, name: fsName, startTime: jsStartTime, endTime: jsEndTime, parentDocID: parentDocID,
//                   useruid: uid, userBookingID: userBookingID, status: status,
//                   admin: admin, adminID: adminID, adminResponseTime: adminResponseTime,
//                   displayName: displayName, email: email,
//                   bookingReason: bookingReason
//               }
//           })
//       })

//       setBookings(dummyBookings)
//       console.log('bookings:', bookings)
//       setReset(false)
//   };