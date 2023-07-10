import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const NavBar = () => {
    const navMap = [
        {href: '/', title: "Home"},
        {href: '/movies', title: 'Movies'}
    ]
    return (
        <SideBar>
            {navMap.map(link => (
                <NavItem key={link.href} to={link.href}>
                    {link.title}
                </NavItem>
            ))}
        </SideBar>
    )
}

const SideBar = styled.nav`
	background-color: #d5edfd;
	/* min-height: 100vh; */
	border-bottom: 2px solid grey;
    /* width:100%; */
	/* display: flex;
	flex-direction: row; */
	gap: 25px;
	/* position: fixed; */
	width: 200px;
	padding: 40px 20px;
`
export const NavItem = styled(NavLink)`
	/* display: flex;
	align-items: center; */
	gap: 10px;
	padding: 5px;
	border-radius: 4px;
	text-decoration: none;
	color: black;

	&.active {
		/* background-color: blue; */
		color: red;
	}
	&:hover:not(.active) {
		background-color: lightblue;
	}
`