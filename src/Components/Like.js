import React from "react";
import like from "../img/like.png";
import dislike from "../img/dislike.png";
import Button from "@material-ui/core/Button";
import "./like.scss";

class Like extends React.Component {
  state = {
    isLike: false,
    dislike: false,
  };
  handleLike = () => {
    if (this.state.dislike === false) {
      this.setState({ isLike: !this.state.isLike });
    }
    if (this.state.dislike) {
      this.setState({ isLike: !this.state.isLike, dislike: false });
      
    }
    if(!this.props.likesData.includes(this.props.item.id)){
        this.props.handleDataLikes(this.props.item)
    }
    if(this.state.isLike){
        this.props.removeLike(this.props.item)
    }
    
  };
  handleDislike = () => {
    if (this.state.isLike) {
      this.setState({ dislike: !this.state.dislike, isLike: false });
    } else {
      this.setState({ dislike: !this.state.dislike });
    }
    if(this.state.isLike){
        this.props.removeLike(this.props.item)
    }
  };
  render() {
    let likeClass = "box__like";
    let dislikeClass = "box__dislike";
    if (this.state.isLike) {
      likeClass += " active";
    }
    if (this.state.dislike) {
      dislikeClass += " active";
    }
    return (
      <div className="box">
        <Button onClick={this.handleLike} className={likeClass}>
          <img alt="like" src={like} />
        </Button>
        <Button onClick={this.handleDislike} className={dislikeClass}>
          <img alt="dislike" src={dislike} />
        </Button>
      </div>
    );
  }
}

export default Like;
