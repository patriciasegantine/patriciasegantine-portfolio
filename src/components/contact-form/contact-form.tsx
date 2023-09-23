import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Snackbar, TextField } from "@mui/material";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inputBorderStyles } from "../../global.styles.ts";
import { CustomButton, Form } from "../../view/contact/contact.styles.ts";
import CloseIcon from '@mui/icons-material/Close';
import { FakeSending } from "./contact-form.styles.ts";

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [formDetails, setFormDetails] = useState<FormData>(formInitialDetails)
  const [buttonText, setButtonText] = useState<string>('Send')
  const [loading, setLoading] = React.useState<boolean>(false);
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  
  const onChangeInputValue = (value: string, type: 'name' | 'email' | 'message') => {
    
    setFormDetails({
      ...formDetails,
      [type]: value
    })
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setButtonText('Sending')
    setLoading(true)
    
    setTimeout(() => {
      setButtonText('Send')
      setLoading(false)
      setFormDetails(formInitialDetails)
      setOpenMessage(true)
    }, 2000)
  };
  
  const handleCloseMessage = () => {
    setOpenMessage(!openMessage)
  }
  
  const action = (
    <div>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseMessage}
      >
        <CloseIcon fontSize="small"/>
      </IconButton>
    </div>
  );
  
  useEffect(() => {
    const isFieldsFilled = formDetails.name !== '' && formDetails.email !== '' && formDetails.message !== ''
    
    if (isFieldsFilled) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formDetails]);
  
  return (
    
    <Form
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container rowSpacing={3}>
        
        <Grid item xs={12} md={12}>
          <TextField
            color={'primary'}
            id="outlined-controlled"
            label="Name"
            type="text"
            required
            variant="outlined"
            value={formDetails.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeInputValue(event.target.value, 'name');
            }}
            fullWidth
            sx={inputBorderStyles}
          />
        </Grid>
        
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-controlled"
            type="email"
            label="Email"
            required
            value={formDetails.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeInputValue(event.target.value, 'email');
            }}
            sx={inputBorderStyles}
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-controlled"
            label="Message"
            type="text"
            required
            multiline
            rows={5}
            value={formDetails.message}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeInputValue(event.target.value, 'message');
            }}
            sx={inputBorderStyles}
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12} md={12}>
          <CustomButton
            type="submit"
            variant="contained"
            color={"primary"}
            loading={loading}
            loadingPosition="center"
            endIcon={<FontAwesomeIcon icon={faPaperPlane} size={"xs"}/>}
            size="large"
            disabled={isDisabled}
          >
            {buttonText}
          </CustomButton>
        </Grid>
      </Grid>
      
      <Box sx={{width: 300}}>
        <Snackbar
          autoHideDuration={10000}
          anchorOrigin={{vertical: "top", horizontal: "right"}}
          open={openMessage}
          onClose={handleCloseMessage}
          action={action}
          message={
            <FakeSending>
              <h2>Message not sent. </h2>
              <p>
                Please note that this is a simulation, and the message has not been sent as there is
                currently no backend integration.
              </p>
            </FakeSending>
          }
        />
      </Box>
    </Form>
  );
};
