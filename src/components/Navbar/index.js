import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LogoPharmaGo } from '../../assets';
import { getSearch } from '../../actions';
import { useDispatch } from 'react-redux';

import './navbar.css';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';
import { Login } from '..';

const NavbarCom = (props) => {
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const history = useHistory();

  const handleSearch = () => {
    dispatch(
      getSearch(search, () =>
        history.push({ pathname: '/search', state: 'HELLO' })
      )
    );
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className='border-bottom'>
      <div className='container pt-2 pb-0'>
        <div className='row'>
          <div className='col-3 align-self-center'>
            <Link to='/'>
              <img src={LogoPharmaGo} className='image' alt='pharmago' />
            </Link>
          </div>
          <div className='col-6 align-self-center'>
            <InputGroup>
              <Input
                placeholder='contoh : paracetamol'
                type='text'
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <InputGroupAddon addonType='append'>
                <Button color='secondary' onClick={handleSearch}>
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className='col-3 align-selft-center'>
            <div className='d-flex justify-content-end right-menu'>
              <ul className='right-menu_ul'>
                <li className='mr-4'>
                  <Link to='/'>
                    <i className='large material-icons right-menu_icon'>
                      shopping_cart
                    </i>
                  </Link>
                </li>
                <li className='ml-2'>
                  <Link to='/'>
                    <i className='large material-icons right-menu_icon'>
                      notifications
                    </i>
                  </Link>
                </li>
                <li className='ml-3'>
                  <Link to='/'>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                        }}
                      >
                        <i className='large material-icons right-menu_icon'>
                          account_circle
                        </i>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={openModal}>Login</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Login visible={visible} closeModal={closeModal} />
    </div>
  );
};

export default NavbarCom;
