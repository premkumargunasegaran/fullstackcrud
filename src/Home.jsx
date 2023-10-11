import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios.get("http://localhost:3001/userGet");
    setuser(response.data);
  };

  const onDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="  d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" container w-100 bg-white rounded p-3">
        <div className="w-100 d-flex justify-content-end">
          <Link to="create" className="btn btn-primary ">
            Add user +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email </th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.age}</td>
                  <td>
                    <button className="btn btn-success me-3">
                      <Link to={`update/${value._id}`} className="text-white">
                        Edit
                      </Link>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(value._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
