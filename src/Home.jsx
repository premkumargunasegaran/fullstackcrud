import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [user, setuser] = useState([
    {
      Name: "prem",
      email: "prem@gmail.com",
      age: "prem",
    },
  ]);
  return (
    <div className="  d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" container w-100 bg-white rounded p-3">
        <div className="w-100 d-flex justify-content-end">
          <Link to="create" className="btn btn-primary ">Add user +</Link>
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
                <tr>
                  <td>{value.Name}</td>
                  <td>{value.email}</td>
                  <td>{value.age}</td>
                  <td>
                    <button className="btn btn-success me-3"><Link to="update" className="text-white">Edit</Link></button>
                    <button className="btn btn-danger">Delete</button>
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
