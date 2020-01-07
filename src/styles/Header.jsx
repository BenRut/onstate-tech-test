import styled from 'styled-components';

const Nav = styled.nav`
	background: white;
	height: 110px;
	display: flex;
	justify-content: space-between;
	padding: 0 100px 0 100px;
	align-items: center;
`;

const Logo = styled.img`
	width: 163px;
`;

const RightContent = styled.div`
	display: flex;
	align-items: center;
`;
const Hamburger = styled.div`
	background-color: red;
	color: black;
	height: 50px;
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PhoneNumber = styled.span`
	margin-right: 40px;
	width: 207px;
	font-size: 20px;
	font-family: 'Inter-SemiBold';
`;

export { Nav, RightContent, Hamburger, PhoneNumber, Logo };
