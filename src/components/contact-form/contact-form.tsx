import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, IconButton, Snackbar, TextField } from "@mui/material";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inputBorderStyles } from "../../global.styles.ts";
import { CustomButton, Form } from "../../view/contact/contact.styles.ts";
import CloseIcon from '@mui/icons-material/Close';
import { FilledRequired, SendingMessage } from "./contact-form.styles.ts";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string
  email: string
  message: string
}

type TypeForm = 'name' | 'email' | 'message'

export const ContactForm = () => {
  
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  
  const contactForm = useRef() as React.MutableRefObject<HTMLFormElement>
  
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [formDetails, setFormDetails] = useState<FormData>(formInitialDetails)
  const [loading, setLoading] = React.useState<boolean>(false);
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const [message, setMessage] = useState<string>()
  
  const onChangeInputValue = (value: string, type: TypeForm) => {
    setFormDetails({
      ...formDetails,
      [type]: value
    })
  }
  
  const failMessage = "Fail to send the message!";
  const successMessage = "Message sent with Success!!";
  
  const fetchSendMessage = () => {
    setLoading(true)
    
    emailjs.sendForm(
      'service_enpzblf',
      'template_q1sxs1k',
      contactForm.current,
      '8BZWzW0mNTQliZmQf'
    )
      .then(() => {
        setLoading(false)
        setMessage(successMessage)
        setOpenMessage(true)
        setFormDetails(formInitialDetails)
      }, (error) => {
        console.log(error.text);
        setMessage(failMessage)
        setOpenMessage(true)
      });
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetchSendMessage()
  };
  
  const handleCloseMessage = () => setOpenMessage(!openMessage)
  
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
    if (formDetails.name && formDetails.email && formDetails.message) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formDetails]);
  
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        ref={contactForm}
      >
        <Grid container rowSpacing={3}>
          
          <Grid item xs={12} md={12}>
            <TextField
              name="user_name"
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
              name="user_email"
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
              name="message"
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
              Send
            </CustomButton>
            
            {
              isDisabled &&
              <FilledRequired>To enable the button, all required fields must be filled in.</FilledRequired>
            }
          </Grid>
        </Grid>
      </Form>
      
      <Box sx={{width: 300}}>
        <Snackbar
          autoHideDuration={5000}
          anchorOrigin={{vertical: "top", horizontal: "right"}}
          open={openMessage}
          onClose={handleCloseMessage}
          action={action}
          message={
            <SendingMessage>
              <p>{message}</p>
            </SendingMessage>
          }
        />
      </Box>
    </>
  );
};
