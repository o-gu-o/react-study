import React from 'react'

// 子组件
function QFLang(props){
  let { list,value,onChange } = props
  function langClick(ele,e){
    console.log(ele)
    // 调用父组件传递过来的自定义事件
    e.target.value=ele.lang_en
    onChange(e)
  }
  return(
    <div className='qf-lang'>
      {
        list.map(ele=>(
        <span 
          key={ele.id}
          className={value===ele.lang_en?'on':''}
          onClick={(e)=>langClick(ele,e)}
        >
          {ele.lang_zh}
        </span>
        ))
      }
    </div>
  )
}

// 父子组件之间通信
// 父传子，使用自定义属性props（可以做任何类型的数据，包括React元素、方法处理器）
// 子传父，使用自定义事件（在React中，约定俗成，自定义事件写成 onAaaBbb 这样）
export default class TestLang extends React.Component{
  constructor(props){
    super(props)
    this.state={
      langlist:[
        {id:1,lang_zh:'中文',lang_en:'zh'},
        {id:2,lang_zh:'英文',lang_en:'en'},
        {id:3,lang_zh:'日语',lang_en:'jp'},
        {id:4,lang_zh:'韩语',lang_en:'kr'},
        {id:5,lang_zh:'法语',lang_en:'fr'}
      ],
      lang:'zh'
    }
  }
  langChange(e){
    console.log('父',e)
    this.setState({lang:e.target.value})
  }
  render(){
    let {langlist,lang} = this.state
    const arr=langlist.filter(ele=>ele.lang_en===lang)
    console.log(arr)
    return(
      <div>
        <h1>测试父子组件通信</h1>
        <hr/>

        <QFLang 
          list={langlist}
          value={lang}
          onChange={(e)=>this.langChange(e)}
        />
        <h1>你选择的是:{arr[0].lang_zh}</h1>
      </div>
    )
  }
}