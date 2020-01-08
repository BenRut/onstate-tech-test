import React, { Component } from 'react';
import Slider from './Slider';

import {
	Services,
	ProjectWrapper,
	Project,
	ProjectDescription,
	Successes,
	SuccessPoint,
	TestimonyWrapper,
	Author,
	ProjectImage,
	LargeProjectImage,
	MediumProjectImage,
	ImageWrapper
} from '../styles/ProjectPage';
import {
	BigBlackTitle,
	BigGreyTitle,
	BlackSubHeading,
	SmallGreyText,
	RightParagraph,
	LeftParagraph
} from '../styles/Text';

import {
	Responsive,
	isMobileDevice,
	isTabletDevice,
	isLaptopDevice
} from 'responsive-react';

class ProjectPage extends Component {
	state = {
		successes: [
			{ heading: '300', text: 'Increase in conversion rate' },
			{ heading: '50k', text: 'Visitors in the first 3 months' },
			{ heading: 'Increase', text: 'In channel share' }
		]
	};
	render() {
		return (
			<>
				<ProjectWrapper
					data-aos="fade-up"
					data-aos-anchor-placement="bottom-bottom"
					data-aos-duration="2000"
				>
					<Services>
						<li>Shopify</li>
						<li>Design & UX</li>
						<li>Build</li>
						<li>Analytics</li>
						<li>Branding</li>
						<li>Art Direction</li>
					</Services>
					<Project>
						<BigBlackTitle>Baudoin & Lange</BigBlackTitle>
						<BigGreyTitle>
							Taking an artisan shoemaker to the next level in their digital
							journey
						</BigGreyTitle>
						<ProjectDescription>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Excepturi laboriosam dolore nostrum? Explicabo ad nesciunt alias,
							repellat sapiente eius, aut, sed quos delectus aspernatur
							necessitatibus? Dolorum unde tempore fugiat corporis distinctio
							illo odit. Suscipit ipsa optio sed aspernatur nemo perspiciatis?
						</ProjectDescription>
					</Project>
				</ProjectWrapper>

				<ImageWrapper>
					<ProjectImage />
				</ImageWrapper>

				<ImageWrapper>
					<ProjectImage />
				</ImageWrapper>

				<ImageWrapper>{/* <Slider /> */}</ImageWrapper>

				<ImageWrapper>
					<LargeProjectImage />
				</ImageWrapper>

				<LeftParagraph
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
				>
					<BlackSubHeading>Unique menu structure</BlackSubHeading>
					<SmallGreyText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
						quod earum! Eius quo accusamus tempora, quidem perferendis soluta
						necessitatibus eligendi tempore a voluptatum vero dolore cum aliquid
						totam magnam optio consequatur reprehenderit aperiam ab maiores?
					</SmallGreyText>
				</LeftParagraph>
				<ImageWrapper>
					<ProjectImage />
				</ImageWrapper>

				<RightParagraph
					data-aos="fade-left"
					data-aos-duration="700"
					data-aos-easing="ease-in-sine"
				>
					<BlackSubHeading>Component based design</BlackSubHeading>
					<SmallGreyText>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iste
						et, perspiciatis fugiat hic rem eius saepe, temporibus nemo ipsum
						ipsa natus nihil provident officia distinctio inventore quasi
						excepturi adipisci. Quae esse qui consequuntur rem.
					</SmallGreyText>
				</RightParagraph>

				<ImageWrapper>
					<MediumProjectImage />
				</ImageWrapper>

				<Responsive displayIn={['laptop']}>
					<Successes
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-duration="7000"
					>
						{this.state.successes.map(success => {
							return (
								<SuccessPoint>
									<BigBlackTitle>{success.heading}</BigBlackTitle>
									<SmallGreyText>{success.text}</SmallGreyText>
								</SuccessPoint>
							);
						})}
					</Successes>
				</Responsive>

				<Responsive displayIn={['tablet', 'mobile']}>
					<Slider
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-duration="1000"
						items={this.state.successes}
					/>
				</Responsive>

				<TestimonyWrapper>
					<hr />
					<BigBlackTitle
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-duration="2000"
					>
						&ldquo;Onstate painlessly migrated us from Squarespace to Shopify,
						giving us a richer online experience for us to engage our customers
						more with our brand&rdquo;
					</BigBlackTitle>
					<Author
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-duration="2000"
					>
						Bo van Langeveld, Co-Founder at Baudin & Lange
					</Author>
					<hr />
				</TestimonyWrapper>
			</>
		);
	}
}

export default ProjectPage;
