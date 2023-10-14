import Table from 'react-bootstrap/Table';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useState , useEffect } from 'react';


function TableApi() {

    const [users, setUsers] = useState([]);

     useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(data =>{
            setUsers(Object.entries(data))
            console.log(Object.entries(data));})
     },[])  
       
  return (
    <Container className='mb-5'>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>user Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user , index)=>(
            <tr key={index}>
          <td>{index + 1}</td>
          <td>{user[1].name}</td>
          <td>{user[1].username}</td>
          <td>{user[1].email}</td>
        </tr>
    ))}
        
      </tbody>
    </Table>
    </Container>
  );
}

export default TableApi;