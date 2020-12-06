
import{ observable,action,makeObservable,computed } from 'mobx'



export default class TodoStore {
  constructor(){
    // makeAutoObservable(this)
    makeObservable(this,{
      list:observable,
      addTask:action,
      delTask:action,
      total:computed
    })
  }
  list=[
    {id:1,task:'跑步'}
  ]
  addTask(payload){
    this.list.push({id:Date.now(),task:payload})
  }
  delTask(payload){
    this.list=this.list.filter(ele=>ele.id!==payload)
  }
  get total(){
    return this.list.length
  }
}


