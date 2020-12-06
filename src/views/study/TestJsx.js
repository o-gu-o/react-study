import React from 'react'
import img from '@/utils/img'


// 什么是jsx？
// JSX=JavaScript XML 是一种js语法糖
// 为什么要使用JSX？在react开发中，JSX语法是可选的，但是react官方强烈建议使用，用JSX使代码更优雅，便于维护
// JSX是变量/对象 是react元素
// 在JSX中可以使用表达式，用{}包裹，可以放变量  变量用{}，组件用标签
// JSX是可以嵌套的
// JSX中，class属性要写成className
// JSX中，for属性要写成htmlFor
// JSX中，注释内容要用{}包裹
// JSX中，默认可以防注入攻击（XSS）
// react元素 VS react类
// 简单理解：视觉上看起来像是HTML结构的玩意，就是React元素，也叫JSX



const red='JSX'

const ele1 = <div className={red}>hello JSX</div>
const ele2 = <div>{ Math.random() }</div>
const ele3 = <div>{ ele1 }{ ele2 }</div>
const ele4 = ()=><div>{ ele3 }</div>
function ele5(){
  return( ele4() )
}
// 如果不适用jsx语法糖，应该这样创建reac元素
const element = React.createElement(
  'div',
  {className: 'JSX',title:'hello jsx'},
  'Hello, world!'
)
// 类组件
class TextJsx extends React.Component{
  render(){
    return(
      <div>
        { ele1 }
        { ele2 }
        { ele3 }
        { ele4() }
        { ele5() }
        {/* 这是我公司的图片 */}
        <img src={img.logo} className='img'/>
        <hr/>
        { element }
      </div>
    )
  }
}


// 函数式组件（无状态组件）
// 用function关键来定义，也可以用箭头函数来定义

export default ()=>{
  const bol = Math.random()>0.5
  return(
    <div>
      { ele1 }
      { ele2 }
      { ele3 }
      { ele4() }
      { ele5() }
      {/* 这是我公司的图片 */}
      <img src={img.logo} className='img'/>
      <hr/>
      { element }
      <hr/>
      {bol?ele1:ele2}
    </div>
  )
}
