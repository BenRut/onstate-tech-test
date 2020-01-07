import styled from 'styled-components';
// import BelowHeaderImageURL from '[url]';

const ProjectPageWrapper = styled.div`
	margin-left: 5vw;
	margin-right: 5vw;
`;

const Services = styled.ul`
	font-size: 18px;
	font-family: 'Inter-Regular';
	line-height: 30px;
	margin-right: 475px;
	color: #9b9b9b;
	list-style: none;
	text-align: left;
`;

const Project = styled.div`
	text-align: left;
`;

const ProjectWrapper = styled.div`
	display: flex;
`;

const Client = styled.h1`
	color: #000;
	font-family: 'Inter-Semibold';
	font-size: 44px;
	line-height: 55px;
	letter-spacing: -1px;
	margin-bottom: 0px;
	margin-block-start: 0px;
`;

const SubHeading = styled.h2`
	color: #9b9b9b;
	font-family: 'Inter-Semibold';
	font-size: 44px;
	line-height: 55px;
	letter-spacing: -1px;
	margin-bottom: 45px;
	margin-top: 0px;
`;

const ProjectDescription = styled.p`
	color: #000000;
	font-family: 'Inter-Regular';
	font-size: 18px;
	line-height: 30px;
`;

const Successes = styled.div`
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 80px;
	height: 150px;
`;

const SuccessPoint = styled.div`
	width: 435px;
	display: flex;
	align-items: center;
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

const TestimonyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 80px;
`;

const Testimony = styled.span`
	color: #000000;
	font-family: 'Inter-SemiBold';
	font-size: 44px;
	text-align: center;
	width: 60vw;
	margin-bottom: 40px;
`;
const Author = styled.span`
	color: #9b9b9b;
	font-family: 'Inter-Regular';
	font-size: 14px;
	line-height: 24px;
`;

export {
	ProjectPageWrapper,
	Services,
	Project,
	ProjectWrapper,
	Client,
	SubHeading,
	ProjectDescription,
	Successes,
	SuccessPoint,
	SuccessHeading,
	SuccessTagline,
	TestimonyWrapper,
	Testimony,
	Author
};
