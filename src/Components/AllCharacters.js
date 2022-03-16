import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import { getAllCharacters,getCharactersById,getSearchCharacter } from "../Services/characters";

import { NavLink } from "react-router-dom";
import "./allCharacter.scss";
import Like from "./Like";
import { Button } from "@material-ui/core";

const btnStyle = {
    margin: "40px",
    border: "5px solid pink",
    background: "red"
  };
  const btnDefault = {};

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
          window.location.reload();
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
      <div>
        <header>
          <Input
            placeholder="Search by Name"
            onChange={(e) => {
              this.handleSearchValue(e.target.value);
            }}
          />
        </header>
        <main>
            <Button onClick={this.showLikedName}>Show liked Characters</Button>
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
