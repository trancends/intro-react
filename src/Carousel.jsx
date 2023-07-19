import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleClickEvent = (event) => {
    return this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {/* eslint-disable-next-line */}
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              alt="animal thumbnail"
              key={photo}
              className={index === active ? "active" : ""}
              onClick={this.handleClickEvent}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
