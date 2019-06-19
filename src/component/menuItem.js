import React, { Component } from 'react';
import PropType from 'prop-types';

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

MenuItem.propTypes = {
    content:PropType.string.isRequired,
    delItem:PropType.func.isRequired,
    index:PropType.number.isRequired
}

export default MenuItem;

