import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BigBlackTitle, SmallGreyText } from '../styles/Text';
import {
	SliderWrapper,
	SuccessPoint,
	ImageWrapper
} from '../styles/ProjectPage';

class Slider extends Component {
	state = {
		index: 0,
		direction: 0
	};

	handleSelect = (selectedIndex, e) => {
		this.setState({ index: selectedIndex, direction: e.direction });
	};
	render() {
		return (
			<SliderWrapper>
				<ImageWrapper>
					<Carousel
						activeIndex={this.state.index}
						direction={this.state.direction}
						onSelect={this.handleSelect}
					>
						{this.props.items.map(item => {
							return (
								<Carousel.Item>
									<SuccessPoint>
										<BigBlackTitle>{item.heading}</BigBlackTitle>
										<SmallGreyText>{item.text}</SmallGreyText>
									</SuccessPoint>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</ImageWrapper>
			</SliderWrapper>
		);
	}
}

export default Slider;
