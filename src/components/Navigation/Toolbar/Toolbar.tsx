import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Toolbar.scss';

class Toolbar extends Component {
  state = {
    showSubMenu: false,
    rotate: { transform: 'rotate(0deg)' },
    ToolbarSubMenu: ['toolbar-submenu']
  };

  showSubMenuhandler = () => {
    const showSubMenu = !this.state.showSubMenu;
    const ToolbarSubMenu = this.state.ToolbarSubMenu;
    let { transform } = this.state.rotate;

    if (showSubMenu) {
      ToolbarSubMenu.splice(1, 1, 'show-toolbar-submenu');
    }
    if (!showSubMenu) {
      ToolbarSubMenu.splice(1, 1, 'hide-toolbar-submenu');
    }

    if (transform === 'rotate(0deg)') {
      transform = 'rotate(180deg)';
    } else {
      transform = 'rotate(0deg)';
    }

    this.setState({
      showSubMenu,
      rotate: { transform },
      ToolbarSubMenu
    });
  };

  render() {
    const ToolbarSubMenu = this.state.ToolbarSubMenu;
    return (
      <nav className="Toolbar">
        <ul className="navigation-items">
          <li className="toogle-item">
            <span>LC</span>
            <Link to="/" onClick={this.showSubMenuhandler}>
              Hello Lara{' '}
              <FontAwesomeIcon icon={faChevronDown} style={this.state.rotate} />
            </Link>
            <ul className={ToolbarSubMenu.join(' ')}>
              <li>
                <Link to="/">Settings</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;
