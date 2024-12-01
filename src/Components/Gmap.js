import { Component } from "react";
import {Map ,GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component{
    render (){
        return(
        <Map
            google ={this.props.google}
            style={{width:"100%" ,height:"50%"}}
            zoom={10}
            initialCenter={
                {
                    lat:17.385044,
                    lng:78.486671
                }
            }
        />
        )
    }
}
export default GoogleApiWrapper({
    apikey:"AIzaSyCPWj_PGtV1RqZ7ehIdeLTant2bobRMcoQ"
})(MapContainer)