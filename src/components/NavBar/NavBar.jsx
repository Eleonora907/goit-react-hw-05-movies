import { NavItem, SideBar } from './NavDar.styled';
import PropTypes from 'prop-types';

const NavBar = () => {
  const navMap = [
    { href: '/', title: 'Home' },
    { href: '/movies', title: 'Movies' },
  ];
  return (
    <SideBar>
      {navMap.map(link => (
        <NavItem key={link.href} to={link.href}>
          {link.title}
        </NavItem>
      ))}
    </SideBar>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavBar;
