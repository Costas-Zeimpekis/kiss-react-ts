import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';
import Avatar from '../Avatar/Avatar';

class SideDrawer extends Component {
  state = {
    sideMenuShow: false,
    btnClass: ['toogle-btn', 'not-active'],
    SideDrawerMenuClasses: ['side-drawer-menu', 'hide-side-drawer-menu']
  };

  sideMenuShowHandler = () => {
    const sideMenuShow = !this.state.sideMenuShow;
    const btnClass = this.state.btnClass;
    const SideDrawerMenuClasses = this.state.SideDrawerMenuClasses;

    if (sideMenuShow) {
      btnClass.splice(1, 1, 'active');
      SideDrawerMenuClasses.splice(1, 1, 'show-side-drawer-menu');
    }

    if (!sideMenuShow) {
      btnClass.splice(1, 1, 'not-active');
      SideDrawerMenuClasses.splice(1, 1, 'hide-side-drawer-menu');
    }

    this.setState({
      sideMenuShow
    });
  };

  render() {
    const SideDrawerMenuClasses = this.state.SideDrawerMenuClasses;
    return (
      <Fragment>
        <nav className="toogle-menu">
          <button
            className={this.state.btnClass.join(' ')}
            onClick={this.sideMenuShowHandler}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={SideDrawerMenuClasses.join(' ')}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </nav>
        <div className="side-drawer">
          <Avatar classAdd="avatar-mobile" />
        </div>
      </Fragment>
    );
  }
}

export default SideDrawer;
