import React from "react";
import { getCharacterById } from "../Services/characters";
import "./profile.scss";
import { getEpisodeById } from "../Services/episodes";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class Profile extends React.Component {
  state = {
    data: [],
    location: "",
    episode: [],
  };
  getData = () => {
    const array = window.location.pathname.split("/");
    const id = +array[array.length - 1];

    getCharacterById(id)
      .then((response) => {
        this.setState({ data: response.data });
        this.setState({ location: response.data.location });
      })
      .catch((error) => {
        alert(error);
      });

    getEpisodeById(id)
      .then((response) => {
        this.setState({ episode: response.data.episode });
      })
      .catch((error) => {
        alert(error);
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="card">
        <header>
          <h2>Name is: {this.state.data.name}</h2>
        </header>
        <section>
          <p>Species is: {this.state.data.species}</p>
          <p>Gender is: {this.state.data.gender}</p>
          <p>Location: </p>
          <ul>
            <li>Location name is: {this.state.location.name}</li>
            <li>Location url is: {this.state.location.url}</li>
          </ul>
          <p>Episode is: {this.state.episode}</p>
          <p>Status is: {this.state.data.status}</p>
          <p>Created: {this.state.data.created}</p>
        </section>
        <NavLink to={"/"}
        className='card__navigation'
         style={{ textDecoration: 'none' }}>
          <Button className="card__backbtn">Back</Button>
        </NavLink>
      </div>
    );
  }
}
export default Profile;
