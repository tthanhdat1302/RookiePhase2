import React from "react";
import { Button } from "reactstrap";

export default function DetailPopUp(props) {

  return (
    <div className="popupDisable">
      <div className="row row1">
        <div className="col-12">
          <label>Detailed User Information</label>
            <Button onClick={props.close}>Cancel</Button>
        </div>
      </div>
      <div className="row row2">
        <div className="row row2_1">
          <div className="col-12">
            <label>Do you want to disable this user?</label>
          </div>
        </div>
      </div>
    </div>
  );
}
