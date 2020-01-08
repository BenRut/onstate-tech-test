import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ImageCarousel extends Component {
	state = {
		index: 0,
		direction: 0
	};

	handleSelect = (selectedIndex, e) => {
		this.setState({ index: selectedIndex, direction: e.direction });
	};
	render() {
		return (
			<Carousel
				activeIndex={this.state.index}
				direction={this.state.direction}
				onSelect={this.handleSelect}
			>
				{this.props.urls.map(url => {
					return (
						<Carousel.Item>
							<img src={url} alt="" />
						</Carousel.Item>
					);
				})}
			</Carousel>
		);
	}
}

export default ImageCarousel;
