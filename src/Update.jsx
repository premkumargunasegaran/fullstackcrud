import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios.get(`http://localhost:3001/userGet/` + id);
    const { data } = response;
    const { name, email, age } = data;

    setname(name);
    setage(age);
    setemail(email);
  };

  const Update = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then((res) => {
        if (res.status == 200) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
