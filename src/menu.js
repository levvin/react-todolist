import React,{Component,Fragment } from 'react';
import MenuItem from './component/menuItem'
class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'魔幻',
            list:['仙侠','都市']
        }
        this.del=this.del.bind(this)
    }
    trim(s){
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }
    inputChange(e){
        let inputValue = this.trim(e.target.value)
        this.setState({
            inputValue: inputValue 
        })
    }
    add(){
        if(this.state.inputValue!==''){   
            this.setState({
                list:[...this.state.list,this.state.inputValue],
                inputValue:''
            })
        }
    }
    del(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="myinput">新增类型：</label>
                    <input 
                        type="text"  
                        in="myinput"
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                    />
                    <button onClick={this.add.bind(this)} >增值服务</button>
                </div>
                <ul >
                   {
                       this.state.list.map((item,index)=>{
                           return (                      
                                  <MenuItem 
                                    content={item} 
                                    key={index+item}
                                    index={index} 
                                    delItem={this.del}
                                  />                     
                           )
                       })
                   }
                </ul>
            </Fragment>
        )
    }
}

export default Menu;

