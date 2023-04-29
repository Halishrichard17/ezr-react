import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import UserDataService from "../services/user.services";




const UsersList = ({ getUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const [input, setInput] = useState('');


  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };
  return (
    <>

   

      <div className="mt-5 mb-2">
        <Button variant="dark edit" onClick={getUsers}>
          Refresh List
        </Button>
      </div>
     
      {/* <pre>{JSON.stringify(users, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="">
        <thead>
          <tr>
            
          <th scope="col text-primary">#</th>
          <th scope="col text-primary">User Name</th>
          <th scope="col text-primary">User ID</th>
          <th scope="col text-primary">DOB</th>
          <th scope="col text-primary">Active</th>
          <th scope="col text-primary">User Role</th>
          <th scope="col text-primary">Company Name</th>
          <th scope="col text-primary">Company No</th>
          <th scope="col text-primary">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.username}</td>
                <td>{doc.userid}</td>
                <td>{doc.dob}</td>
                <td>{doc.active}</td>
                <td>{doc.userrole}</td>
                <td>{doc.companyname}</td>
                <td>{doc.comnpanyno}</td>
                <td>{doc.phone}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getUserId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default UsersList;
