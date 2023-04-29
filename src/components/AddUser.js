import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup} from "react-bootstrap";
import UserDataService from "../services/user.services";
import { Container,  Row, Col } from "react-bootstrap";

const AddUser = ({ id, setUserId }) => {
  const [userid, setUserid] = useState('');
  const [dob, setDob] = useState('');
  const [active, setActive] = useState('');
  const [userrole, setUserrole] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [comnpanyno, setComnpanyno] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (username === "" || userid === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newUser = {
      username,
      userid,
      dob,
      active,
      userrole,
      companyname,
      comnpanyno,
      phone
    };
    console.log(newUser);

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newUser);
        setUserId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await UserDataService.addUsers(newUser);
        setMessage({ error: false, msg: "New User added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setUsername("");
    setUserid("");
  };
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setUsername(docSnap.data().username);
      setUserid(docSnap.data().userid);
      setActive(docSnap.data().active);
      setDob(docSnap.data().dob);
      setUserrole(docSnap.data().userrole);
      setCompanyname(docSnap.data().companyname);
      setComnpanyno(docSnap.data().comnpanyno);
      setPhone(docSnap.data().phone);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>

            <Container>
            <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

      </div>
                <div >
                <Form onSubmit={handleSubmit}  >
        <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formUsername">
            <InputGroup>
              <InputGroup.Text id="formUsername">User Name</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formUserId">
            <InputGroup>
              <InputGroup.Text id="formUserId">User Id</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder=""
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDob">
            <InputGroup>
              <InputGroup.Text id="formDob">Date Of Birth</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formActive">
            <InputGroup>
              <InputGroup.Text id="formActive">Active</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          </Col>
          <Col>
                  <Form.Group className="mb-3" controlId="formUserrole">
                    <InputGroup>
                      <InputGroup.Text id="formUserrole">User Role</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="User Role"
                        value={userrole}
                        onChange={(e) => setUserrole(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCompanyname">
                    <InputGroup>
                      <InputGroup.Text id="formCompanyname">Company Name</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="User Company Name"
                        value={companyname}
                        onChange={(e) => setCompanyname(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCompanyno">
                    <InputGroup>
                      <InputGroup.Text id="formCompanyno">Company No</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="User Company No"
                        value={comnpanyno}
                        onChange={(e) => setComnpanyno(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <InputGroup>
                      <InputGroup.Text id="formPhone">phone</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="User phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
          </Col>
  
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
          </Row>
        </Form>
                   
                </div>
       
            </Container>
     
    </>
  );
};

export default AddUser;
