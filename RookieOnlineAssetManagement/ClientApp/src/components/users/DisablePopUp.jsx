import React from "react";
import { Button } from "reactstrap";

export default function DisablePopUp(props) {

  return (
    <div className="popupDisable">
      <div className="row row1">
        <div className="col-12">
          <label>Are you sure?</label>
        </div>
      </div>
      <div className="row row2">
        <div className="row row2_1">
          <div className="col-12">
            <label>Do you want to disable this user?</label>
          </div>
        </div>
        <div className="row row2_2">
          <div className="col-2">
            <Button color="danger" onClick={() => props.onDisableUser(props.userId)}>
              Disable
            </Button>
          </div>
          <div className="col-2">
            <Button onClick={props.close}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
