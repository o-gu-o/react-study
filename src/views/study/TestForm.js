import React from 'react'
// 表单，在组件化眼中，HTML5表单、类表单

// 有哪些表单？文本类(input / textarea)、select/option
// input[type='checkbox | radio | file | color']

// 表单：单向绑定
// value/checked & onChange 必须成双成对、一起使用

// 受控表单：表单的 value/checked 由 state 完全控制
// 非受控表单：表单的 value/checked 不受 state 控制，与state无关

let age=''
export default class TestForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'shawn',
      desc: '',
      level:'',
      gender:1,
      favCheckedArr:['A','B']
    }
  }

  submitUnctrlForm(){
    // ref 是React中也有，它一种快捷访问、操作DOM的方式
    // 尽可能减少 DOM / ref 操作
    const data={
      name:document.getElementById('name').value,
      pass:this.refs.pass.value,
      age
    }
    console.log('非控',data )
  }
  getAge(e){
    age=e.target.value
  }


  // 受控表单，手动取值
  onChange(e,key){
    switch(key){
      case "favCheckedArr":
      // if(e.target.checked){
      //   this.setState(state=>{
      //     state.favCheckedArr.push(e.target.value)
      //     return {favCheckedArr:state.favCheckedArr}
      //   })
      // }else{
      //   this.setState(state=>{
      //     return{favCheckedArr:state.favCheckedArr.filter(ele=>ele!==e.target.value)}
      //   })
      // }
      this.setState(state=>({favCheckedArr:e.target.checked?[...state.favCheckedArr,e.target.value]:state.favCheckedArr.filter(ele=>ele!==e.target.value)}))
      break;
      default:
        this.setState({[key]:e.target.value})
    }
  }
  submitctrlForm(){
    console.log('控制',this.state )
  }

  render(){
    let { name,desc,level,gender,favCheckedArr }=this.state
    let levelArr = [
      {id:1,level:'高中',level_en:'a'},
      {id:2,level:'大专',level_en:'b'},
      {id:3,level:'本科',level_en:'c'},
      {id:4,level:'硕士',level_en:'d'},
      {id:5,level:'博士',level_en:'e'}
    ]
    let favArr = [
      {id:1,fav:'篮球',fav_en:'A'},
      {id:2,fav:'足球',fav_en:'B'},
      {id:3,fav:'网球',fav_en:'C'},
      {id:4,fav:'排球',fav_en:'D'},
      {id:5,fav:'桌球',fav_en:'E'}
    ]
    // checkbox数据的二次处理
    favArr.map((ele,idx,arr)=>{
      arr[idx].checked=favCheckedArr.includes(ele.fav_en)
    })
    return(
      <div>
        <h1>测试表单</h1>
        <hr/>
        { /* 以下三种非受控表单，不要用 */ }
        <input id="name" type="text" /> <br/>
        <input ref="pass" type="password" /> <br/>
        <input type="text" onInput={(e)=>this.getAge(e)} /> <br/>
        { /*在React中，有且仅有一个你可以放心使用的非受控制表单 */ }
        <input type="file" /> <br/>
        <button onClick={()=>this.submitUnctrlForm()}>提交非受控表单</button>

        {/* React中，除文件上传以外，其它所有表单都要使用受控表单 */}
        <hr/><hr/>
        <span>用  户  名： </span>
        <input type="text" value={name} onChange={(e)=>this.onChange(e,'name')}/> <br/><hr/>
        <span>个人描述：</span>
        <textarea cols="22" rows="10" value={desc} onChange={(e)=>this.onChange(e,'desc')}></textarea> <br/><hr/>
        <span>选择学历：</span>
        <select value={level} onChange={(e)=>this.onChange(e,'level')}>
          {
            levelArr.map(ele=>(
            <option 
              value={ele.level_en} 
              key={ele.id}
            >
              {ele.level}
            </option>))
          }
        </select> <br/>
        <hr/>
        <span>选择性别：</span>
        {/*name字段，用于把radio变成一组，并联起来*/}
        {/*value字段，用于给每个单选项加一个唯一值，它不用于控制勾选状态*/}
        {/*checked是用于控制radio的勾选状态的*/}
        {/*onChange和checked是成对的关系，在onChange手动取值*/}
        <input 
          name="gender" 
          type="radio" 
          value="1"
          checked={gender==1}
          onChange={(e)=>this.onChange(e,'gender')}
        /><span>男</span>
        <input 
          name="gender" 
          type="radio" 
          value="2"
          checked={gender==2}
          onChange={(e)=>this.onChange(e,'gender')}
        /><span>女</span> <br/>
        <hr/>
        <span>选择爱好：</span>
        {/* value属性，用于checkbox选项的唯一值 */}
        {/* checked属性，用于checkbox选项的勾选状态 */}
        {/* onChange 用于手动取舍，它与checked属性是成对的 */}
        {
            favArr.map(ele=>(
              <span key={ele.id}>
                <input 
                  type="checkbox" 
                  value={ele.fav_en} 
                  checked={ele.checked}
                  onChange={(e)=>this.onChange(e,'favCheckedArr')}
                />
                <span>{ele.fav}</span>
              </span>
            ))
          }
          <br/><hr/>
        <button onClick={()=>this.submitctrlForm()}>提交受控表单</button>
      </div>
    )
  }
}