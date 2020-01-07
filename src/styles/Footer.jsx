import styled from 'styled-components';

const NextProject = styled.div`
	margin-left: 50vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		margin-left: 0px;
	}
`;

const ArrowWrapper = styled.div`
	height: 60px;
	width: 60px;
	font-size: 44px;
`;

export { NextProject, ArrowWrapper };
