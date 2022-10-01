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
        }}
      >
        <button
          onClick={() => {
            toggleAddVisitor(status => !status)
          }}
          style={{
            textAlign: 'right'
          }}
        >
          Add Visitor
        </button>
      </div>
      {open && <VisitorEntryView toggleAddVisitor={toggleAddVisitor} />}
      {!open && <VisitorView />}
    </>
  )
}

export default DashboardHome;