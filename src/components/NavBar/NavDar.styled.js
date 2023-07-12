import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const SideBar = styled.nav`
	border-bottom: 2px solid grey;
	gap: 25px;
	padding: 40px 20px;
`
export const NavItem = styled(NavLink)`
	gap: 40px;
	padding: 5px;
	border-radius: 4px;
	text-decoration: none;
	color: white;
	font-size: 25px;
	margin-right: 20px;

	&.active {
		color: red;
	}
	&:hover:not(.active) {
		background-color: lightblue;
	}
`