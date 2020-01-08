import styled from 'styled-components';

const MenuModal = styled.div`
	position: fixed;
	background-color: black;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 0 100px 0 100px;

	display: flex;
`;

const XButton = styled.div`
	color: white;
	height: 50px;
	width: 50px;
	font-size: 40px;
	margin: 20px;
`;

export { MenuModal, XButton };
