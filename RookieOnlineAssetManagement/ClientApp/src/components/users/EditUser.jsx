import React, { useState, useEffect } from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";
import { useHistory,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../../actions/user";
import { Input, Button } from "reactstrap";
import "../../css/user_css/create.css";
import Select from "react-select";
import DateTimePicker from 'react-datetime-picker';

export default function UpdateUser() {
  const dispatch = useDispatch();
  const history=useHistory();
  let {id}=useParams();

  useEffect(() => {
    dispatch(userManage.get_user_byId(id));
  }, []);

  const getUserById = useSelector((state) => state.user.userSelected);

  let userByid=getUserById;

  const [stateDateOfBirth, setDateOfBirth] = useState(new Date());
  const [stateJoinedDate, setJoinedDate] = useState(new Date());

  useEffect(()=>{
    if(userByid.dateOfBirth!=undefined)
      setDateOfBirth(new Date(userByid.dateOfBirth))
  },[userByid.dateOfBirth])

  useEffect(()=>{
    if(userByid.joinedDate!=undefined)
      setJoinedDate(new Date(userByid.joinedDate))
  },[userByid.joinedDate])

  const [updateUser, setUpdateUser] = useState({
    DateOfBirth: stateDateOfBirth,
    JoinedDate: stateJoinedDate,
    Gender: null,
    Type: null,
  });

  useEffect(()=>{
    setUpdateUser({...updateUser,Gender:userByid.gender,Type:userByid.type})
  },[userByid])

  const [btnDisable, setBtnDisable] = useState(true);

  const onSelectType = (e) => {
    setUpdateUser({ ...updateUser, Type: e.value });
  };

  useEffect(() => {
    if (
      updateUser.DateOfBirth !== null &&
      updateUser.JoinedDate !== null &&
      updateUser.Type !== null &&
      updateUser.Gender!==null
    ) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [updateUser]);

  const [err,setErr]=useState({Check18YearsOld:""})

  const onUpdate = () => {
    const checkDay=stateJoinedDate.getDate()-stateDateOfBirth.getDate();
    const checkMonth=stateJoinedDate.getMonth()-stateDateOfBirth.getMonth();
    const checkYear=stateJoinedDate.getFullYear()-stateDateOfBirth.getFullYear();
    if(checkDay>=0&&checkMonth==0&&checkYear==18||checkYear>18||checkYear==18&&checkMonth>0)
    { 
      dispatch(userManage.update_user(id,updateUser));
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
    setUpdateUser({...updateUser,DateOfBirth:stateDateOfBirth!=null?stateDateOfBirth:null})
  },[stateDateOfBirth])

  useEffect(()=>{
    setUpdateUser({...updateUser,JoinedDate:stateJoinedDate!=null?stateJoinedDate:null})
  },[stateJoinedDate])

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
              <b>Edit User</b>
            </div>

            <div id="secondRowInRight">
              <div className="row createUserRow">
                <div className="col-4">
                  <label>First Name</label>
                </div>
                <div className="col-8">
                  <Input
                    type="text"
                    readOnly
                    name="FirstName"
                    value={userByid.firstName}
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
                    name="LastName"
                    value={userByid.lastName}
                    readOnly
                  ></Input>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Date of Birth</label>
                </div>
                <div className="col-8">
                  <DateTimePicker onChange={setDateOfBirth} value={stateDateOfBirth} format="dd/MM/y" clearIcon maxDate={new Date()} className="dateTimeCreateUser"></DateTimePicker>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Gender</label>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-4 radioBtnCreateUser">
                      <Input type="radio" value={true} onClick={()=>setUpdateUser({...updateUser,Gender:true})} checked={updateUser.Gender===true} /> Male
                    </div>
                    <div className="col-8">
                      <Input type="radio" value={false} onClick={()=>setUpdateUser({...updateUser,Gender:false})} checked={updateUser.Gender===false} /> Female
                    </div>
                  </div>               
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Joined Date</label>
                </div>
                <div className="col-8">
                  <DateTimePicker format="dd/MM/y" value={stateJoinedDate} onChange={setJoinedDate} clearIcon minDate={stateDateOfBirth} className="dateTimeCreateUser"></DateTimePicker>
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
                    placeholder={updateUser.Type===true?"Admin":"Staff"}
                  ></Select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6"></div>
              <div className="col-3">
                <Button onClick={onUpdate} disabled={btnDisable} color="danger">
                  Save
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
