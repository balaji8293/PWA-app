import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Users() {
  const [datat, setDatat] = useState([]);
  const [mode,setMode] = useState("online");
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then((response) =>{response.json().then((result) => {
      setDatat(result);
      localStorage.setItem("users",JSON.stringify(result))
    })}).catch(err=>{
      let collectData = localStorage.getItem("users");
      setDatat(JSON.parse(collectData));
      // alert("catch block");
      setMode("offline")
    })
    // .catch(e => console.error(e));
  }, []);
  return (
    <div>
    <div>
      {
        mode === "offline"?<div className="alert alert-warning" role={alert}>
          You are Offline.! Some issue with Connection. </div>:null
      }
    </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id.</th>
            <th>First Name</th>
            <th>Last Name</th>
            {/* <th>Email</th>
            <th>Address</th> */}
          {/* <td>{items.email}</td>
          <td>{items.address.street}</td> */}
          </tr>
        </thead>
        <tbody>
          {datat.map((items) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
