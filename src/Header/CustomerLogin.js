import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomerLogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Customer Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={6}>
              <h2>Sign Up</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius ame
            </Grid>
            <Grid item xs={6}>
              <h2>Login</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius 
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
