import React, { Component } from 'react';
import {
	Nav,
	RightContent,
	Hamburger,
	PhoneNumber,
	Logo,
	BelowHeaderImage
} from '../styles/Header';
import Menu from './Menu';
import LogoURL from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
	state = {
		showMenu: false
	};
	handleClick = e => {
		this.setState(currentState => {
			return { showMenu: !currentState.showMenu };
		});
	};
	render() {
		return (
			<>
				{this.state.showMenu && <Menu handleClick={this.handleClick} />}
				<Nav>
					<Logo
						id="Logo"
						src={LogoURL}
						alt=""
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-duration="2000"
					/>
					<RightContent
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-duration="2000"
						data-aos-offset="0"
					>
						<PhoneNumber>+44 (0)113 386 0020</PhoneNumber>
						<Hamburger name="menu" onClick={this.handleClick}>
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
