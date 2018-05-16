import axios from "axios";
var qs = require('qs');

//userRoute  -- /api/user
//budgetRoute -- /api/budget
//billRoute -- /api/bill
export default {

  //Gets all users
  getUsers: () => {
    return axios({
      method: "get",
      url: "/api/user"
    });
  },

  //so far all of these routes below this line function
  createUser: data => {
    return axios.post("/api/user/", data);
  },

  //creates a budget and sends all the users budgets back sto the usersBudget state
  createBudget: data => {
    return axios.post("/api/budget/", data);
  },

  //creates a bill and sends all the users bills back to the usersbill state
  createBill: data => {
    return axios.post("/api/bill/", data);
  },

  updateBill: data => {
    return axios.put("/api/bill/", data);
  },

  shareBudget: data => {
    return axios.put("/api/user/", data);
  },

  getUserLogin: data => {
    return axios.post("/api/user/cred", data);
  },

  userUpdate: data => {
    return axios.put("/api/user/upd", data);
  },

  userUpdateSec: data => {
    return axios.put("/api/user/sec", data);
  },

  removeUserFromShareBudget: data => {
    return axios.post("/api/user/share", data);
  },

  deleteUser: data => {
    return axios.post("/api/user/delete/", data);
  },

  getUserBudgets: id => {
    return axios.get("/api/user/" + id);
  },

  getUserSecurityQuestions: id => {
    return axios.get("/api/user/sec/" + id);
  },

  getUserNameSecurityQuestions: name => {
    return axios.post("/api/user/forgotSec/" , name);
  },

  getBudgetBills: id => {
    return axios.get("/api/budget/" + id);
  },
  getBudgetObjects: id => {
    return axios.get("/api/budget/" + id);
  },

  deleteBill: data => {
    return axios.post("/api/bill/delete/", data);
  },

  deleteMe: data => {
    return axios.post("/api/user/delete/", data);
  },

  deleteAllBills: data => {
    return axios.post("/api/bill/deleteAll/", data);
  },

  deleteAllBudgets: data => {
    return axios.post("/api/budget/deleteAll/", data);
  },

  deleteBudget: data => {
    return axios.post("/api/budget/delete/", qs.stringify(data));
  },

  //Gets all Budgets for everyone
  getBudgets: () => {
    return axios({
      method: "get",
      url: "/api/budget"
    });
  },

  //Gets all bills for everyone
  getBills: () => {
    return axios({
      method: "get",
      url: "/api/bill"
    });
  }
};


