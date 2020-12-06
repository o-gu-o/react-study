import React,{useState,useEffect} from 'react'
import { observer,inject } from 'mobx-react'


export default inject('store')(observer(
  props=>{
    let { todo }=props.store
    let [ task,setTask ] = useState('')
    const confirm=(e)=>{
      if(e.keyCode===13){
        todo.addTask(task)
        setTask('')
      }
    }
    const delComfirm=(e,ele)=>{
      e.preventDefault()
      todo.delTask(ele.id)
    }
    return(
      <div>
        <h1>wode todolist</h1>
        <input 
          type='text' 
          value={task} 
          onChange={e=>setTask(e.target.value)}
          onKeyUp={(e)=>confirm(e)}
        />
        {
          todo.list.map(ele=>(
          <div key={ele.id}>
            <span>{ele.id}</span>
            <span>====</span>
            <span>{ele.task}</span>
            <span>====</span>
            <a onClick={e=>delComfirm(e,ele)} href='http://www.baidu.com'>删除</a>
          </div>
          ))
        }
        <h2>待完成任务 {todo.total} 条</h2>
      </div>
    )
  } 
))