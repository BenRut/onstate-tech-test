import React, { Component } from 'react';
import {
	Nav,
	RightContent,
	Hamburger,
	PhoneNumber,
	Logo,
	BelowHeaderImage
} from '../styles/Header';
import LogoURL from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
	render() {
		return (
			<>
				<Nav>
					<Logo id="Logo" src={LogoURL} alt="" />
					<RightContent>
						<PhoneNumber>+44 (0)113 386 0020</PhoneNumber>
						<Hamburger>
							<FontAwesomeIcon icon={faBars} />
						</Hamburger>
					</RightContent>
				</Nav>
				<BelowHeaderImage />
			</>
		);
	}
}

export default Header;
