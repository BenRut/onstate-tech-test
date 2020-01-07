import React from 'react';
import { Banner, Logo } from '../styles/LogoBanner';
import LogoURL from '../img/logo.svg';

const LogoBanner = () => {
	return (
		<Banner>
			<Logo src={LogoURL} />
		</Banner>
	);
};

export default LogoBanner;
