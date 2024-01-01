import styled from 'styled-components';
import { FormState } from '../PatientForm';
import {useState} from 'react';
import { useContext } from 'react';

const PatientFormLeftWrapper = () => {
    const Handler = useContext(FormState);
    return (
      <FormLeft>
          <FormInput>
              <label>Patient Address</label>
              <Input onChange={Handler.FormHandler} value={Handler.form.PatientAddress} placeholder='Patient Address' name='PatientAddress'></Input>
          </FormInput>
      </FormLeft>
    )
}

const FormLeft = styled.div`
    width:48%;


`

const FormInput = styled.div`
    display:flex;
    flex-direction:column;
`

const Input = styled.input`
    padding:10px;
    margin-top:4px;
    border:none;
    font-size:large;

    

`
export default PatientFormLeftWrapper