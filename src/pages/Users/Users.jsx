import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";

function Users () {
  const users = [{ id: 1, name: "john" }, { id: 2, name: "charles" }];

  return (
  <>
    <div><a href='https://stackoverflow.com/questions/63214924/how-to-return-a-page-by-id-with-react-routing'>stackoverflow.com</a></div>

    {users.map(user=>{
      return(
        <div key={user.id}>
          {user.name}
          `<Link to=".user/{user.id}">
          <Button>go</Button></Link>`
        </div> 
      )
    })}
    <div key='3'>Петя Ветров<Link to=".."><Button>go</Button></Link></div>

  </>
  );
}

export default Users;