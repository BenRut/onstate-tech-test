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
	min-width: 200px;
`;

const Project = styled.div`
	text-align: left;
`;

const ProjectWrapper = styled.div`
	display: flex;
	margin-bottom: 150px;
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

const ProjectImage = styled.div`
	background: green;
	width: 1366px;
	height: 900px;
	margin-bottom: 80px;
`;

const LargeProjectImage = styled(ProjectImage)`
	height: 2600px;
	margin-bottom: 150px;
`;

const MediumProjectImage = styled(LargeProjectImage)`
	height: 1537px;
`;

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export {
	ProjectPageWrapper,
	Services,
	Project,
	ProjectWrapper,
	ProjectDescription,
	Successes,
	SuccessPoint,
	TestimonyWrapper,
	Testimony,
	Author,
	ProjectImage,
	LargeProjectImage,
	MediumProjectImage,
	ImageWrapper
};
