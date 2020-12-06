// 两种推荐的ESLint的关闭方式
/* eslint-disable */
// console.log(1) // eslint-disable-line
/* eslint-enable */

// 只要用到了jsx语法的文件模块，就要引用react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@/assets/css/common.scss';
import '@/assets/css/style.scss';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';


// render的第一个参数必须是一个 React组件，第二个参数是真实的DOM节点
ReactDOM.render(<App/>,document.getElementById('root'))



// import img from '@/utils/img';
// // console.log('我是react入口文件');
// document.getElementById('test').style.color='green'
// document.getElementById('img').src=img.logo // eslint-disable-line


/* eslint-enable */
