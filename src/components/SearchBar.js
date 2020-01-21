import React from 'react'

class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            search_text : ''
        }
    }

    handleChange = (event) => {
        this.setState({search_text : event.target.value })
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.search_text);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.submitForm} className="ui form">
                    <div className="field">
                        <label> <h3>Video Search</h3></label>
                        <input type="text" value={this.state.search_text} onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar