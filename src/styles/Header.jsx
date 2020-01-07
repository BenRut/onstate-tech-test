import styled from 'styled-components';

const Nav = styled.nav`
	background: white;
	height: 110px;
	display: flex;
	justify-content: space-between;
	padding: 0 100px 0 100px;
	align-items: center;
	@media (max-width: 768px) {
		padding: 0 15px 0 15px;
	}
`;

const Logo = styled.img`
	width: 163px;
	@media (max-width: 768px) {
		width: 108px;
	}
`;

const RightContent = styled.div`
	display: flex;
	align-items: center;
`;
const Hamburger = styled.div`
	background-color: red;
	color: white;
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
	@media (max-width: 768px) {
		display: none;
	}
`;

const BelowHeaderImage = styled.div`
	height: 530px;
	background: green;
	margin-bottom: 60px;
	@media (max-width: 768px) {
		margin-bottom: 30px;
	}
`;

export { Nav, RightContent, Hamburger, PhoneNumber, Logo, BelowHeaderImage };
