// import React from 'react';

import { TextField, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inputBorderStyles, muiTheme } from "../../global.styles.ts";
import { CustomButton, FomItem, Form } from "../../view/contact/contact.styles.ts";

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  
  const [dataForm, setDataForm] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  const onChangeInputValue = (value: string, type: 'name' | 'email' | 'message') => {
    
    const newValue = {...dataForm, [type]: value}
    
    setDataForm(newValue)
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  
  useEffect(() => {
    
    const isFieldsFilled = dataForm.name !== '' && dataForm.email !== '' && dataForm.message !== ''
    
    if (isFieldsFilled) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [dataForm]);
  
  return (
    <ThemeProvider theme={muiTheme}>
      <Form
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          color={'primary'}
          id="outlined-controlled"
          label="Name"
          variant="outlined"
          value={dataForm.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeInputValue(event.target.value, 'name');
          }}
          fullWidth={true}
          sx={inputBorderStyles}
        />
        
        <FomItem>
          <TextField
            id="outlined-controlled"
            label="Email"
            value={dataForm.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeInputValue(event.target.value, 'email');
            }}
            sx={inputBorderStyles}
            fullWidth={true}
          />
        </FomItem>
        
        <FomItem>
          <TextField
            id="outlined-controlled"
            label="Message"
            multiline
            rows={5}
            value={dataForm.message}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeInputValue(event.target.value, 'message');
            }}
            sx={inputBorderStyles}
            fullWidth={true}
          />
        </FomItem>
        
        
        <CustomButton
          variant="contained"
          color={"primary"}
          endIcon={<FontAwesomeIcon icon={faPaperPlane} size={"xs"}/>}
          size="large"
          disabled={isDisabled}
        >
          Send
        </CustomButton>
      </Form>
    </ThemeProvider>
  );
};
