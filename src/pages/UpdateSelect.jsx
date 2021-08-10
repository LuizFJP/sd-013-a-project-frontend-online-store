import React, { Component } from "react";
import * as api from './services/api'


api.getCategories().then(categories => { console.log(categories) })

export default class UpdateSelect extends Component {    
    render(){
        return(
            <div>
                
            </div>
        );
    }
}