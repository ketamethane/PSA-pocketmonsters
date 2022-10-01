import React, { useState } from "react";
import VisitorEntryView from "./VisitorEntryView";
import VisitorView from "./VisitorView";

const DashboardHome = () => {
  const [open, toggleAddVisitor] = useState(false);
  return (
    <>
      <div
        style={{
          textAlign: 'right',
          marginRight: '20%'
        }}
      >
        <button
          onClick={() => toggleAddVisitor(status => !status)}
          style={{
            textAlign: 'right'
          }}
        >
          Add Visitor
        </button>
      </div>
      {open && <VisitorEntryView toggleAddVisitor={toggleAddVisitor} />}
      <VisitorView />
    </>
  )
}

export default DashboardHome;