import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import { getAllCharacters, getSearchCharacter } from "../Services/characters";

import { NavLink } from "react-router-dom";
import "./allCharacter.scss";
import Like from "./Like";
import { Button } from "@material-ui/core";
import Upload from "./Upload";
import SignIn from './SignIn'


class AllCharacters extends React.Component {
  state = {
    characters: [],
    likesData:[],
    showLikedDate:[]
  };


  handleSearchValue = (value) => {
    if (value !== "") {
      getSearchCharacter(value)
        .then((response) => {
          this.setState({ characters: response.data.results });
        })
        .catch(() => {
          alert("Nothing was found");
          getAllCharacters(this.state.searchValue).then((response) => {
            this.setState({ characters: response.data.results});
          });
        });
    }
  };
  
  componentDidMount() {
    getAllCharacters(this.state.searchValue).then((response) => {
      this.setState({ characters: response.data.results});
      
      
      console.log(response.data);
      console.log(this.state);
    });
  }
  handleDataLikes=(item)=>{
      this.setState({likesData:this.state.likesData.concat(item.name)})
  }
  removeLike=(item)=>{
      this.setState({likesData:this.state.likesData.filter((e)=>e!=item.name)})
  }
 showLikedName=()=>{
    this.setState({showLikedDate:this.state.likesData})
 }

  render() {
    return (
      <div className="container">
        <header>
          <SignIn/>
          <Input
            placeholder="Search by Name"
            onChange={(e) => {
              this.handleSearchValue(e.target.value);
            }}
          />
        </header>
        <main>
            <Button className="btnLikeShow" onClick={this.showLikedName}>Show liked Characters</Button>
           <List>
               {this.state.showLikedDate.map((element)=>{
                   return(
                       <p key={element}>{element}</p>
                   )
               })}
           </List>
          <List className="characters">
            {this.state.characters.map((item) => {
                return(
              <div className="characters__block" key={item.id}>
                <div className="characters__info">
                  <NavLink to={`/profile/${item.id}`} 
                  style={{ textDecoration: 'none' }}>
                    <ListItem className="characters__Item">
                      <ListItemText
                        className="item__text"
                        primary={item.name}
                        secondary={item.status}
                      />
                    </ListItem>
                  </NavLink>
                </div>
                <Upload item={item}/>
                <Like item={item}
                handleDataLikes={this.handleDataLikes} 
                likesData={this.state.likesData}
                removeLike={this.removeLike}/>
               
              </div>
            )})}
          </List>
          <button onClick={()=>console.log(this.state)}>state show</button>
        </main>
      </div>
    );
  }
}
export default AllCharacters;
