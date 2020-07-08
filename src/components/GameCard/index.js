import React from "react";

const divStyle = {
 cursor: 'pointer',
};

class GameCard extends React.Component {

  handleImageClick = () => {
     this.props.handleOnClick(this.props.id)
  };

  render() {
    return (
        <div className={"col-6 col-md-4 col-lg-2"}>
          <img alt={this.props.alt} src={this.props.image} onClick={this.handleImageClick} className={"img-thumbnail"} style={divStyle} />
        </div>
    );
  }
}

export default GameCard;