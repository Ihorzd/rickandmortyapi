import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { getCharacter } from "../Services/characters";
import { NavLink } from "react-router-dom";

class AllCharacters extends React.Component {
  state = {
    characters: [],
    currentPage: 1,
    searchValue: "",
  };

  nextPage = () => {
    if (this.state.currentPage >= 0) {
      this.setState({ currentPage: this.state.currentPage + 1 }, () =>
        getCharacter(this.state.currentPage).then((response) => {
          this.setState({ characters: response.data.results });
        })
      );
    }
    console.log(this.state.currentPage);
  };
  prevPage = () => {
    if (this.state.currentPage >= 1) {
      this.setState({ currentPage: this.state.currentPage - 1 }, () =>
        getCharacter(this.state.currentPage).then((response) => {
          this.setState({ characters: response.data.results });
        })
      );
    }
    console.log(this.state.currentPage);
  };
  handleSearchValue = (value) => {
    if (value !== "") {
      this.setState({ searchValue: value });
    }
  };

  componentDidMount() {
    getCharacter(this.state.currentPage).then((response) => {
      this.setState({ characters: response.data.results });
    });
  }

  render() {
    const filtredCharecters = this.state.characters.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });
    return (
      <div>
        <Input
        placeholder="Serch by Name"
          onChange={(e) => {
            this.handleSearchValue(e.target.value);
          }}
        />
        <List>
          {filtredCharecters.map((item) => (
            <NavLink to={`/profile/${item.id}`}
            key={item.id}>
              <ListItem >
                <ListItemText primary={item.name} secondary={item.status} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.prevPage();
            }}
          >
            Preview
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.nextPage();
            }}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}
export default AllCharacters;
