import React, { Component } from 'react';
import {
	ProjectPageWrapper,
	Services,
	ProjectWrapper,
	Project,
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
} from '../styles/ProjectPage';

class ProjectPage extends Component {
	render() {
		return (
			<>
				<ProjectPageWrapper>
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
							<Client>Baudoin & Lange</Client>
							<SubHeading>
								Taking an artisan shoemaker to the next level in their digital
								journey
							</SubHeading>
							<ProjectDescription>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptas veritatis provident saepe nesciunt asperiores dolore
								obcaecati cum eum. Nobis, sequi.
							</ProjectDescription>
						</Project>
					</ProjectWrapper>
					<Successes>
						<SuccessPoint>
							<SuccessHeading>300%</SuccessHeading>
							<SuccessTagline>Increase in conversion rate</SuccessTagline>
						</SuccessPoint>
						<SuccessPoint>
							<SuccessHeading>50k</SuccessHeading>
							<SuccessTagline>Visitors in the first 3 months</SuccessTagline>
						</SuccessPoint>
						<SuccessPoint>
							<SuccessHeading>Increase</SuccessHeading>
							<SuccessTagline>In channel share</SuccessTagline>
						</SuccessPoint>
					</Successes>
					<TestimonyWrapper>
						<Testimony>
							&ldquo;Onstate painlessly migrated us from Squarespace to Shopify,
							giving us a richer online experience for us to engage our
							customers more with our brand&rdquo;
						</Testimony>
						<Author>Bo van Langeveld, Co-Founder at Baudin & Lange</Author>
					</TestimonyWrapper>
				</ProjectPageWrapper>
			</>
		);
	}
}

export default ProjectPage;
