import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Nav } from '../header/styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { toast } from 'react-toastify';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    toast.success('deslogado');
    history.push('/login');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={29} />
      </Link>

      <Link to="/register">
        <FaUserAlt size={24} style={{ margin: '0 5px' }} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && <small>online</small>}
    </Nav>
  );
}
