import styled from 'styled-components';

const BigBlackTitle = styled.h2`
	color: #000;
	font-family: 'Inter-Semibold';
	font-size: 44px;
	line-height: 55px;
	letter-spacing: -1px;
	margin-bottom: 0px;
	margin-block-start: 0px;
`;

const BigGreyTitle = styled.h2`
	color: #9b9b9b;
	font-family: 'Inter-Semibold';
	font-size: 44px;
	line-height: 55px;
	letter-spacing: -1px;
	margin-bottom: 45px;
	margin-top: 0px;
`;

const BlackSubHeading = styled.h3`
	color: #000;
	font-family: 'Inter-SemiBold';
	font-size: 26px;
	line-height: 55px;
`;

const SmallGreyText = styled.span`
	color: #9b9b9b;
	font-family: 'Inter-Regular';
	font-size: 18px;
`;

const LeftParagraph = styled.div`
	width: 40%;
	margin-bottom: 80px;
`;
const RightParagraph = styled(LeftParagraph)`
	margin-left: 50vw;
`;

export {
	BigGreyTitle,
	BigBlackTitle,
	BlackSubHeading,
	SmallGreyText,
	LeftParagraph,
	RightParagraph
};
