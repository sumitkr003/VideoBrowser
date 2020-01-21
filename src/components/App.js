import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube' 

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            videos : []
        }
    }

    SearchYoutube = async (search_text) => {
        const response = await youtube.get('/search', {
            params : {
                q : search_text
            }
        })

        this.setState({videos : response.data.items})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit = {this.SearchYoutube} />
                <p> I have {this.state.videos.length} videos</p>
            </div>
        )
    }

}

export default App