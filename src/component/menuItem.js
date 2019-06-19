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
     //WARNING! To be deprecated in React v17. Use componentDidMount instead.
     componentWillMount() {
        console.log('3-componentWillMount')
    }
    componentDidMount() {
        console.log('6-componentDidMount')
    }
   
    componentWillReceiveProps(){
        console.log('1-componentWillReceiveProps')
       
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('2-will update')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('5-did update')
    }
    render() { 
        console.log('child-render...')
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

