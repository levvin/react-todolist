import React, { Component } from 'react';
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.handleDel=this.handleDel.bind(this)
    }
    handleDel(){
        this.props.delItem(this.props.index)
    }
    render() { 
        return ( 
            <li onClick={this.handleDel}>{this.props.content}</li>
         );
    }
}
 
export default MenuItem;