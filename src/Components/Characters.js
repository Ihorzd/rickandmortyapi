import React from "react";
import {getCharacter} from '../Services/characters'

class Characters extends React.Component{
    state={
        characters:[]
    }
 
    componentDidMount(){
        getCharacter().then((response)=>{
            this.setState({characters:response.data.results})
            console.log(response.data.results)
        })
    }
    render(){
        return(
            <div>
                Character
            <div>
            {this.state.characters.map((element)=>(
                    <p key={element.id}>{element.name}</p>
                ))}
            </div>
            </div>
        )
            
        
    }
}
export default Characters