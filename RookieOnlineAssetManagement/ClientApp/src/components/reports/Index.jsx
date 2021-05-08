import React from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function Index() {
  return (
    <div>
      <Header page="Report"></Header>
      <div className="row">
        <div className="col-3">
          <LeftSesstion></LeftSesstion>
        </div>
        <div className="col-7">
          <div className="right_session">
            <b>Report</b>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
