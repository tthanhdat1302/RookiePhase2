// import logo from './logo.svg';
import "./App.css";

import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/home/Index";

import AssetPage from "./components/assets/Index";
import CreateAssetPage from "./components/assets/CreateAsset";
import EditAssetPage from "./components/assets/EditAsset";

import AssignmentPage from "./components/assignments/Index";
import CreateAssignmentPage from "./components/assignments/CreateAssignment";
import EditAssignmentPage from "./components/assignments/EditAssignment";

import ReportPage from "./components/reports/Index";

import ReturnRequestPage from "./components/return_request/Index";

import ManageUsersPage from "./components/users/Index";
import CreateUserPage from "./components/users/CreateUser";
import EditUserPage from "./components/users/EditUser";

axios.interceptors.request.use((config) => {
  return config;
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      window.location.href =
        "/Identity/Account/Login?returnUrl=" + window.location.pathname;
    } else {
      return Promise.reject(error);
    }
  }
);

axios.get("/api/users").then((response) => console.table(response.data));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>

        <Route exact path="/asset" component={AssetPage}></Route>
        <Route path="/asset/create" component={CreateAssetPage}></Route>
        <Route path="/asset/edit/:id" component={EditAssetPage}></Route>

        <Route exact path="/assignment" component={AssignmentPage}></Route>
        <Route
          path="/assignment/create"
          component={CreateAssignmentPage}
        ></Route>
        <Route
          path="/assignment/edit/:id"
          component={EditAssignmentPage}
        ></Route>

        <Route exact path="/report" component={ReportPage}></Route>

        <Route exact path="/return" component={ReturnRequestPage}></Route>

        <Route exact path="/user" component={ManageUsersPage}></Route>
        <Route path="/user/create" component={CreateUserPage}></Route>
        <Route path="/user/edit/:id" component={EditUserPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
