import styled from 'styled-components';
// import BelowHeaderImageURL from '[url]';

const BelowHeaderImage = styled.div`
	height: 530px;
	background: green;
	margin-bottom: 60px;
`;

const Successes = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SuccessPoint = styled.div`
	width: 435px;
	display: flex;
	flex-direction: column;
`;

const SuccessHeading = styled.span`
	color: #000000;
	font-family: 'Inter-SemiBold';
	font-size: 44px;
	margin-bottom: 20px;
`;

const SuccessTagline = styled.span`
	color: #9b9b9b;
	font-family: 'Inter-Regular';
	font-size: 18px;
`;

export {
	BelowHeaderImage,
	Successes,
	SuccessPoint,
	SuccessHeading,
	SuccessTagline
};
