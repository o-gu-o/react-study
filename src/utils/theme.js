import React from 'react'


// 创建一个用于主题色的上下文
const ThemeCtx=React.createContext()

const themes={
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  }
}

export default ThemeCtx
export{themes}