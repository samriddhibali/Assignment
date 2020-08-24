import React from 'react';
import './SportsList.css';

const sports = [
    { id : 1, name : "cricket"},
    { id : 2, name : "football"},
    { id : 3, name : "golf"},
    { id : 4, name : "table-tennis"},
    { id : 5, name : "badminton"},
    { id : 6, name : "pool"},
    { id : 7, name : "baseball"},
    { id : 8, name : "basketball"}
];           

class SportsList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchValue: '',
        inputValue: ''
      };
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value,
            searchValue: e.target.value.toLowerCase().trim()
        })
    }

    render(){
        return(
            <div className = "sportsDiv">
                <h3>List of sports games</h3>
                Search Sport: <input type = 'text' value = {this.state.inputValue} placeholder = "Enter name to filter" onChange={this.handleChange}/>
                <ul>
                {
                    sports.map((sport, index) => {
                        if(sport.name.includes(this.state.searchValue)){
                            return <li key = {index}>{sport.name}</li>
                        }
                    })
                }
                </ul>
            </div>
        )
    }
}
export default SportsList;