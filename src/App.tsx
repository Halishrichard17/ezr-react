import { SetStateAction, useState } from "react";
import { Container,  Row, Col } from "react-bootstrap";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Navbar from "./components/Navbar";
import { Table, Button } from "react-bootstrap";
import Icon from '@mui/material/Icon';
function App() {
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }

  const getUserIdHandler = (id: SetStateAction<string>) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };
  return (
  
      
      <div className="App">
        <Navbar/>
        <div className=" mt-5 "></div>
        <Button variant="dark edit offset-8" onClick={handleOpen}>  + Add
        </Button>
        <Container>
        <Row>
        <Modal
                open={open}
                onClose={e => setOpen(false)}
                className="todo__modal mt-5"
                >
              
         
        <Container className="mt-5" style={{ width: "800px" }}>
        <Row>
          <Col>
            <AddUser id={userId} setUserId={setUserId} />
          </Col>
        </Row>
      </Container> 
      </Modal>
      

          <Col>
            <UsersList getUserId={getUserIdHandler} />
          </Col>
        </Row>
      </Container>
          </div>
  );
}

export default App;
