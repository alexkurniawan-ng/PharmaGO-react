import React from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';

const Login = (props) => {
  return (
    <Modal
      visible={props.visible}
      width='400'
      height='500'
      effect='fadeInUp'
      onClickAway={props.closeModal}
    >
      <div style={{ margin: '3rem', color: 'black', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
          <h4>Login PharmaGO</h4>
          <p style={{ color: 'grey', fontSize: '14px' }}>
            Belum punya akun?
            <span style={{ color: 'black' }}> Daftar</span>
          </p>
        </div>
        <Form>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' />
            <FormText color='muted' className='text-right mt-2'>
              Lupa Password
            </FormText>
          </FormGroup>

          <Button
            size='md'
            className='mt-2 w-100'
            style={{ backgroundColor: '#3FB380' }}
          >
            Login
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default Login;
