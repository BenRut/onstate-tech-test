import React from 'react';
import { MenuModal, XButton } from '../styles/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = props => {
	return (
		<MenuModal>
			<XButton onClick={props.handleClick}>
				<FontAwesomeIcon icon={faTimes} />
			</XButton>
		</MenuModal>
	);
};

export default Menu;
