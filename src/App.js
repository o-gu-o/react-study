import React from 'react'
import { Component } from 'react'

import {Layout} from '@/components'


// const ele = <h1>hello react 23</h1>

// 类组件，组件定义
// class App extends React.Component{
//   render(){
//     return ele
//   }
// }

import ThemeCtx,{themes} from '@/utils/theme'

// 路由
import {
  HashRouter,
  BrowserRouter
} from 'react-router-dom'

import { Provider } from 'mobx-react'
import store from './store'

// 函数式组件，组件定义
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      theme:themes.light,
      background:'#ffffff',
      color:'#000000'
    }
  }
  toggleTheme(){
    this.setState(state=>({theme:Math.random()>0.5?themes.light:themes.dark}))
  }
  themeChange(key,e){
    this.setState({[key]:e.target.value})
  }
  render(){
    const {theme,color,background}=this.state
    return (
      <HashRouter>
        <Provider store={store}>
          <ThemeCtx.Provider value={{color,background}}>
            <Layout/>

              {/*
                <div>
                <h1>shawn</h1>
                  <TestProps
                    hello="hello child"
                    bol={true}
                    arr={[1,2,3,4]}
                    obj={{a:1,b:2}}
                    ele={<h1>hello react</h1>}
                  />
                <input type='color' value={color} onChange={(e)=>this.themeChange('color',e)} />
                <input type='color' value={background} onChange={(e)=>this.themeChange('background',e)} />
                <button onClick={()=>this.toggleTheme()}>切换主题色</button>
                <TestHooks />
                </div>
              */}
              
          </ThemeCtx.Provider >
        </Provider>
      </HashRouter>
    )
  }
}

export default App
