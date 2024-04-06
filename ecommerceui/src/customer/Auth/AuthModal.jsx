import React from "react";
import { Button, Box, Modal, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";

  const style = {
    position: 'absolute', //as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
  };


const AuthModal = ({handleClose, handleOpen}) => {
  const location=useLocation();
  return (
    <div>
      AuthModal
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname==="/login"?<LoginForm/> :}
          <RegisterForm/>
          
          <RegisterForm/>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
