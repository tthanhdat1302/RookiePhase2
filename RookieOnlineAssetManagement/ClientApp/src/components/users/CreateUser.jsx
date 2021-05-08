import React, { useState, useEffect } from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../../actions/user";
import { Input, Button,Label } from "reactstrap";
import "../../css/user_css/create.css";
import Select from "react-select";
import DateTimePicker from 'react-datetime-picker';

export default function CreateUser() {
  const dispatch = useDispatch();
  const history=useHistory()

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [joinedDate, setJoinedDate] = useState(new Date());

  const [createUser, setCreateUser] = useState({
    FirstName: "",
    LastName: "",
    DateOfBirth: dateOfBirth.toLocaleDateString(),
    JoinedDate: joinedDate.toLocaleDateString(),
    Gender: null,
    Type: null,
  });
  const [btnDisable, setBtnDisable] = useState(true);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreateUser({ ...createUser, [name]: value });
  };

  const onSelectType = (e) => {
    setCreateUser({ ...createUser, Type: e.value });
  };

  useEffect(() => {
    if (
      createUser.FirstName != "" &&
      createUser.LastName != "" &&
      createUser.DateOfBirth != "" &&
      createUser.JoinedDate != "" &&
      createUser.Type != null &&
      createUser.Gender!=null
    ) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [createUser]);

  const [err,setErr]=useState({Check18YearsOld:""})

  const onCreate = () => {
    const checkDay=joinedDate.getDate()-dateOfBirth.getDate();
    const checkMonth=joinedDate.getMonth()-dateOfBirth.getMonth();
    const checkYear=joinedDate.getFullYear()-dateOfBirth.getFullYear();
    if(checkDay>=0&&checkMonth>=0&&checkYear>=18)
    { 
      dispatch(userManage.add_user(createUser));
    }
    else{
      setErr({...err,Check18YearsOld:"Chưa đủ 18 tuổi !"})
    }
  };

  const optionsType = [
    { value: true, label: "Admin" },
    { value: false, label: "Staff" },
  ];

  useEffect(()=>{
    setCreateUser({...createUser,DateOfBirth:dateOfBirth.toLocaleDateString()})
  },[dateOfBirth])

  useEffect(()=>{
    setCreateUser({...createUser,JoinedDate:joinedDate.toLocaleDateString()})
  },[joinedDate])

  return (
    <div>
      <Header page="Manage User > Create New User"></Header>
      <div className="row">
        <div className="col-3">
          <LeftSesstion></LeftSesstion>
        </div>
        <div className="col-3">
          <div className="right_session">
            <div className="row" id="firstRowInRight">
              <b>Create New User</b>
            </div>

            <div id="secondRowInRight">
              <div className="row createUserRow">
                <div className="col-4">
                  <label>First Name</label>
                </div>
                <div className="col-8">
                  <Input
                    type="text"
                    onChange={onChange}
                    name="FirstName"
                  ></Input>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Last Name</label>
                </div>
                <div className="col-8">
                  <Input
                    type="text"
                    onChange={onChange}
                    name="LastName"
                  ></Input>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Date of Birth</label>
                </div>
                <div className="col-8">
                  <DateTimePicker onChange={setDateOfBirth} value={dateOfBirth} format="dd/MM/y" clearIcon maxDate={new Date()} className="dateTimeCreateUser"></DateTimePicker>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Gender</label>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-4 radioBtnCreateUser">
                      <Input type="radio" value={true} onClick={()=>setCreateUser({...createUser,Gender:true})} checked={createUser.Gender===true} /> Male
                    </div>
                    <div className="col-8">
                      <Input type="radio" value={false} onClick={()=>setCreateUser({...createUser,Gender:false})} checked={createUser.Gender===false} /> Female
                    </div>
                  </div>               
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Joined Date</label>
                </div>
                <div className="col-8">
                  <DateTimePicker format="dd/MM/y" onChange={setJoinedDate} value={joinedDate} clearIcon minDate={dateOfBirth} className="dateTimeCreateUser"></DateTimePicker>
                  <label className="validateErr">{err.Check18YearsOld}</label>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Type</label>
                </div>
                <div className="col-8">
                  <Select
                    options={optionsType}
                    onChange={onSelectType}
                  ></Select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6"></div>
              <div className="col-3">
                <Button onClick={onCreate} disabled={btnDisable} color="danger">
                  Create
                </Button>
              </div>
              <div className="col-3">
                <Button onClick={()=>history.push('/user')}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
