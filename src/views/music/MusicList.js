import React,{useState,useEffect} from 'react'
import MusicRow from './MusicRow'

import { observer,inject } from 'mobx-react'

export default inject('store')(observer(

  props=>{
    let {music}=props.store

    // console.log('MusicList props',props)
    // let [list, setList]=useState([])
    // useEffect(()=>{
    //   let res=[
    //     {id:1,name:'菊花残'},
    //     {id:2,name:'牛仔忙'},
    //     {id:3,name:'简单爱'}
    //   ]
    //   setList(res)
    //   return undefined
    // },[])
    let [page,setPage]=useState(1)

    const changeMsg = ()=>{
      props.store.changeMsg('shawn')
    }


    useEffect(()=>{
      const str='ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=45925488369977341&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
      const params={}
      str.split('&').map(ele=>{
        let arr=ele.split('=')
        params[arr[0]]=arr[1]
      })
      params.w=decodeURI(params.w)
      params.p=page
      music.changeList(params)
      return undefined
    },[page])
    
    const changePage=flag=>{
      if(flag==='prev'&&page<=1)return alert('no')
      setPage(flag==='next'?++page:--page)
    }
    
    return(
      
      <div>
        <h1>音乐列表</h1>
        {
          music.list.map(ele=>(
            <MusicRow key={ele.id} music={ele}/>
          ))
        }
        <button onClick={()=>changePage('prev')}>上一页</button>
        <button onClick={()=>changePage('next')}>下一页</button>

        <hr/>
        <h1>{props.store.msg}</h1>
        <button onClick={()=>changeMsg()}>修改store中的信息</button>
      </div>
    )
  }
))



