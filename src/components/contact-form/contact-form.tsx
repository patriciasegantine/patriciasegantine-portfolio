// import React from 'react';

import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inputBorderStyles } from "../../global.styles.ts";
import { CustomButton, Form } from "../../view/contact/contact.styles.ts";

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
  
  const onChangeInputValue = (value: string, type: 'name' | 'email' | 'message') => {
    
    setFormDetails({
      ...formDetails,
      [type]: value
    })
  }
  
  const handleSubmit = (e) => {
    console.log(e)
  };
  
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
            // disabled={isDisabled}
          >
            {buttonText}
          </CustomButton>
        </Grid>
      </Grid>
    </Form>
  );
};
