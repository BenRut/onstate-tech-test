import React, { Component } from 'react';
import {
	BelowHeaderImage,
	Successes,
	SuccessPoint,
	SuccessHeading,
	SuccessTagline
} from '../styles/ProjectPage';

class ProjectPage extends Component {
	render() {
		return (
			<div>
				<BelowHeaderImage />
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
			</div>
		);
	}
}

export default ProjectPage;
