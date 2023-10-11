import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const navigate = useNavigate()
const handleSubmit = (e) =>{
  e.preventDefault()
  // console.log(name, email, age);
if (name.trim()==="" && email.trim()==="" && age.trim()==="") {
    alert("Please Fill The field")
}
else{
  axios.post("http://localhost:3001/create", {name, email, age}).then((res)=>{
    console.log(res);
    navigate("/")
  }
 ).catch(err=> console.log(err))
}

}
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              onChange={(e)=>setage(e.target.value)}

            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
