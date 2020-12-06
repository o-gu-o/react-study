
import{ observable,action,makeObservable,computed } from 'mobx'

import { fetchQqMusic } from '@/utils/api'


export default class MusicStore {
  constructor(){
    // makeAutoObservable(this)
    makeObservable(this,{
      list:observable,
      changeList:action
    })
  }
  list=[]
  changeList(payload){
    fetchQqMusic(payload).then(res=>{
      this.list=res.song.list
    })
  }
  
}


