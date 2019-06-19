import React,{Component,Fragment } from 'react';
import MenuItem from './component/menuItem';
import Axios from 'axios';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'魔幻',
            list:['仙侠','都市']
        }
        this.del=this.del.bind(this)
    }
    componentDidMount() {
        Axios.get('https://www.easy-mock.com/mock/5cb3da4df872d6591f22c0f8/api/data')
        .then((res)=>{
            console.log('axios 获取数据成功:'+JSON.stringify(res))  
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{
            console.log('axios 获取数据失败'+error)
        })

    }
    trim(s){
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }
    inputChange(e){
        let inputValue = this.trim(this.input.value)
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
                        ref={(input)=>{this.input=input}}
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

