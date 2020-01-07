import React, { Component } from 'react';
import {
	Services,
	ProjectWrapper,
	Project,
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
} from '../styles/ProjectPage';
import {
	BigBlackTitle,
	BigGreyTitle,
	BlackSubHeading,
	SmallGreyText,
	RightParagraph,
	LeftParagraph
} from '../styles/Text';

class ProjectPage extends Component {
	render() {
		return (
			<>
				<ProjectWrapper>
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

				<ImageWrapper>
					<ProjectImage />
				</ImageWrapper>

				<ImageWrapper>
					<LargeProjectImage />
				</ImageWrapper>

				<LeftParagraph>
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

				<RightParagraph>
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

				<Successes>
					<SuccessPoint>
						<BigBlackTitle>300%</BigBlackTitle>
						<SmallGreyText>Increase in conversion rate</SmallGreyText>
					</SuccessPoint>
					<SuccessPoint>
						<BigBlackTitle>50k</BigBlackTitle>
						<SmallGreyText>Visitors in the first 3 months</SmallGreyText>
					</SuccessPoint>
					<SuccessPoint>
						<BigBlackTitle>Increase</BigBlackTitle>
						<SmallGreyText>In channel share</SmallGreyText>
					</SuccessPoint>
				</Successes>

				<TestimonyWrapper>
					<BigBlackTitle>
						&ldquo;Onstate painlessly migrated us from Squarespace to Shopify,
						giving us a richer online experience for us to engage our customers
						more with our brand&rdquo;
					</BigBlackTitle>
					<Author>Bo van Langeveld, Co-Founder at Baudin & Lange</Author>
				</TestimonyWrapper>
			</>
		);
	}
}

export default ProjectPage;
