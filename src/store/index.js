
import{ observable,action,makeObservable,makeAutoObservable } from 'mobx'
import TodoStore from './modules/todo'
import MusicStore from './modules/music'


class Store {
  constructor(){
    this.todo=new TodoStore()
    this.music=new MusicStore()

    // makeAutoObservable(this)
    makeObservable(this,{
      msg:observable,
      changeMsg:action
    })
  }
  msg='hello 2009'
  changeMsg(payload){
    this.msg=payload
  }
}


export default new Store()

