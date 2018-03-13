// Code YouTubeDebugger Component Here
// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties. The initial state shape looks like this: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'


import React, {Component} from "react";


class YouTubeDebugger extends Component{
  state = {
    errors:[],
    user:null,
    settings:{ bitrate: 8, video: { resolution: '1080p' } }
  }

  clicked = ()=>{
    this.setState({
      settings: { bitrate: 12, video: { resolution: '1080p' } }
    })
  }

  clickResolution = ()=>{
    this.setState({
      settings: { bitrate: 8, video: { resolution: "720p" } }
    })
  }

  render(){
    return(
      <div>
      <button className = "bitrate" onClick={this.clicked}></button>
       <button className = "resolution" onClick={this.clickResolution}></button>
       </div>
    )
  }
}


export default YouTubeDebugger
