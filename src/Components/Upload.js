import {Input } from "@material-ui/core";
import React from "react";
import './upload.scss'

class Upload extends React.Component {

    state= {
        image:null
    };

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
  render() {
      let className='img_none'
      if(this.state.image!==null){
          className='upload__img'
      }
    return (
      <div className="upload">
            <img alt={this.props.item.name} className={className} src={this.state.image} />
            <Input type="file" className="upload__input"  onChange={this.onImageChange} />
         
      </div>
    );
  }
}
export default Upload;
