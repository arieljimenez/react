const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className='nav'>
      <NavItem link='/' text='Battle App' />
      <NavItem link='/battle' text='Battle' />
      <NavItem link='/popular' text='Popular' />
    </ul>
  )
}

function NavItem(props) {
  return (
    <li>
      <NavLink exact activeClassName='active' to={props.link} >
        {props.text}
      </ NavLink>
    </li >
  )
}

module.exports = Nav;
