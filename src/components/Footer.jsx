import React from 'react';
import { ArrowWrapper, NextProject } from '../styles/Footer';
import { BigBlackTitle, BigGreyTitle, RightParagraph } from '../styles/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<div>
			<NextProject data-aos="fade-right" data-aos-duration="1000">
				<div>
					<BigBlackTitle>Next Project</BigBlackTitle>
					<BigGreyTitle>Brown Thomas</BigGreyTitle>
				</div>
				<ArrowWrapper>
					<FontAwesomeIcon icon={faArrowRight} />
				</ArrowWrapper>
			</NextProject>
		</div>
	);
};

export default Footer;
