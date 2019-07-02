import React from 'react';
import './Header.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Avatar from '../Navigation/Avatar/Avatar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const header: React.FC = () => (
  <header>
    <Toolbar />
    <SideDrawer />
    <div className="header-background">
      <button onClick={() => window.scrollTo({ top: 650, behavior: 'smooth' })}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
    <Avatar classAdd="avatar-desktop" />
  </header>
);

export default header;
