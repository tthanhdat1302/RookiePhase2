import React, { useState, useEffect } from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../../actions/user";
import Select from "react-select";
import { Button, Input, Table } from "reactstrap";
import "../../css/user_css/index.css";
import {
  faPen,
  faTimesCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Popup from 'reactjs-popup'

export default function Index() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userManage.get_user_list());
  }, []);

  const getUserList = useSelector((state) => state.user.userList);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(getUserList);
  }, [getUserList]);

  const options = [
    { value: null, label: "All" },
    { value: true, label: "Admin" },
    { value: false, label: "Staff" },
  ];

  const pushToCreateUserPage = () => {
    history.push("/user/create");
  };

  const [searchInput, setSearchInput] = useState("");
  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const BtnSearch = () => {
      if (searchInput != "") {
        setUserList(
          getUserList.filter(
            (x) =>
              x.staffCode == searchInput ||
              x.lastName.toLowerCase().startsWith(searchInput.toLowerCase()) ||
              x.firstName.toLowerCase().startsWith(searchInput.toLowerCase())
          )
        );
      } else {
        setUserList(getUserList);
    }
  };

  const onDisableUser=(id)=>{
    dispatch(userManage.disable_user(id))
  }

  const onFilterType=(e)=>{
    switch(e.value){
      case null:
        setUserList(getUserList)
        break
      case true:
        setUserList(getUserList.filter(x=>x.type===true))
        break
      case false:
        setUserList(getUserList.filter(x=>x.type===false))
        break
    }
  }
  return (
    <div>
      <Header page="Manage User"></Header>
      <div className="row">
        <div className="col-3">
          <LeftSesstion></LeftSesstion>
        </div>
        <div className="col-6">
          <div className="right_session">
            <div className="row" id="firstRowInRight">
              <div className="col-12">
                <b>User List</b>
              </div>
            </div>

            <div className="row" id="secondRowInRight">
              <div className="col-3">
                <Select options={options} placeholder="Type" onChange={onFilterType}></Select>
              </div>
              <div className="col-6" id="searchInput">
                <Input onChange={onChangeSearch}></Input>
                <Button color="primary" onClick={BtnSearch}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>
              <div className="col-3">
                <Button color="danger" onClick={pushToCreateUserPage}>
                  Create new user
                </Button>
              </div>
            </div>

            <Table responsive>
              <thead>
                <tr>
                  <th>Staff Code</th>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>JoinedDate</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={index}>
                    <td>{user.staffCode}</td>
                    <td>{user.lastName + " " + user.firstName}</td>

                    <td>{user.userName}</td>

                    <td>{new Date(user.joinedDate).toLocaleDateString()}</td>

                    <td>{user.type ? "Admin" : "Staff"}</td>

                    <td id="userListLastTd">
                      <FontAwesomeIcon icon={faPen} className="cursorIcon" onClick={()=>history.push(`/user/edit/${user.id}`)}/>
                    </td>
                    <td id="userListLastTd">
                    <Popup modal trigger={<FontAwesomeIcon icon={faTimesCircle} color="red" className="cursorIcon" />}>
                      {close =><div className="popupDisable">
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
                              <Button color="danger" onClick={()=>onDisableUser(user.id)} >Disable</Button>
                            </div>
                            <div className="col-2">
                              <Button onClick={close} >Cancel</Button>
                            </div>
                          </div>
                        </div>
                      </div>}
                    </Popup>                   
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
