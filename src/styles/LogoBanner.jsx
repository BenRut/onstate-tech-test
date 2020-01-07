import styled from 'styled-components';

const Banner = styled.div`
	background: #333;
	display: flex;
	align-items: center;
	padding: 0 0 0 20px;
	height: 200px;
	@media (max-width: 768px) {
		background: #01002a;
		height: 80px;
	}
`;

const Logo = styled.img`
	width: 163px;
	filter: invert(100%);
	@media (max-width: 768px) {
		width: 108px;
	}
`;

export { Banner, Logo };
