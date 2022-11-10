import * as React from 'react';
import Box from '@mui/material/Box';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {OutlinedInputProps} from '@mui/material/OutlinedInput';
import './Call-back-banner-input.scss';
import {Button, Checkbox, FormControlLabel} from "@mui/material";
import {useState} from "react";


const CallBackBannerTextField = (props: TextFieldProps) => (
  <TextField
    InputProps={{disableUnderline: true} as Partial<OutlinedInputProps>}
    {...props}
  />
);


function CallBackBannerInput() {
  const [checked, setChecked] = useState(true);
  
  return (
    <Box
      component="form"
      noValidate
      className="form-container"
    >
      <section className="form-field">
        <CallBackBannerTextField
          label="Ваш номер телефона"
          defaultValue="+7"
          id="call-back-banner-input"
          variant="filled"
          className="form-field__input"
          type='tel'
        />
        <Button
          type="submit"
          variant="contained"
          disabled={checked ? false : true}
          className="btn-primary form-field__btn"
        >
          Перезвоните мне
        </Button>
      </section>
      
      <FormControlLabel className='privacy-note'
                        control={<Checkbox
                          className="privacy-checkbox privacy-checkbox_lg"
                          size="medium"
                          required={true}
                          checked={checked}
                          onChange={() => setChecked(!checked)}
                          id='privacy-checkbox'
                        />}
                        label={
                          <div className="privacy-note__text">
                            <span>Я согласен на обработку своих персональных данных согласно </span>
                            <a href="#" className="link">политике конфиденциальности</a>
                          </div>
                        }/>
    </Box>
  );
}

export {CallBackBannerInput};
