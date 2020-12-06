import React from 'react'

// 自定义Modal组件
const QfModal=props=>{

  // 三种按钮
  const ConfirmBtn=()=>(
    <span onClick={()=>props.onOk&&props.onOk(props.sures)} className='info'>{props.sures||"确定"}</span>
  )
  const DeleteBtn=()=>(
    <span onClick={()=>props.onDelete&&props.onDelete(props.deletes)} className='delete'>{props.deletes||"删除"}</span>
  )
  const CancelBtn=()=>(
    <span onClick={()=>props.onCancel&&props.onCancel(props.cancels)} className='cancel'>{props.cancels||"取消"}</span>
  )

    // 动态渲染btns按钮组
  function renderBtns(){
    switch (props.type){
      case "comfirm":
        return(
          <div>
            <ConfirmBtn/>
            <CancelBtn/>
          </div>
        )
        break;
      case "delete":
        return(
          <div>
            <DeleteBtn/>
            <CancelBtn/>
          </div>
        )
        break;
      default:
        return(
          <div>
            <ConfirmBtn/>
          </div>
        )
    }
  }

  return(
    <div className='qf-modal' 
      style={{width:props.tip?"500px":"400px"}}
    >
      {props.tip && <div className='qf-modal-header'>
        <span>{props.tip}</span>
        <span>X</span>
      </div>}
      <div className='qf-modal-content'>
        {props.children}
      </div>
      <div className='qf-modal-footer'>
          {renderBtns()}
      </div>
    </div>
  )
}

// 在React中，实现组件复用，使用的是组合思想，不是继承思想
export default class TestCombine extends React.Component{
  constructor(props){
    super(props)
    this.state={
      sures:"确定12",
      cancels:"取消12",
      deletes:"删除1"
    }
  }

  okHandle(hip){
    alert(hip)
  }
  cancelHandle(e){
    alert(e)
  }
  deleteHandle(e){
    alert(e)
  }

  render(){
    return(
      <div className='qfmodal'>
        <h1>测试组合</h1>
        <hr/>

        {/* 有 Header 的 框 */}
        <QfModal 
          tip='编辑' 
          type='comfirm'
          sures={this.state.sures}
          cancels={this.state.cancels}
          deletes={this.state.deletes}
          onOk={(hip)=>this.okHandle(hip)}
          onCancel={(e)=>this.cancelHandle(e)}
        >
          用户名：<input type='text'/><br/><br/>
          密  码：<input type='password'/>
        </QfModal>

        <QfModal 
          tip='警告' 
          type='delete'
          sures={this.state.sures}
          cancels={this.state.cancels}
          deletes={this.state.deletes}
          onCancel={(e)=>this.cancelHandle(e)}
          onDelete={(e)=>this.deleteHandle(e)}
        >
          <h3>你确定要删除吗</h3>
        </QfModal>

        <QfModal 
          tip='提示'
          sures={this.state.sures}
          cancels={this.state.cancels}
          deletes={this.state.deletes}
          onOk={(e)=>this.okHandle(e)}
        >
          <h3>you opened that you are not supposed to opened</h3>
        </QfModal>

         {/* 没有 Header 的 框 */}
        <QfModal 
          type='comfirm'
          sures={this.state.sures}
          cancels={this.state.cancels}
          deletes={this.state.deletes}
          onOk={(e)=>this.okHandle(e)}
          onCancel={(e)=>this.cancelHandle(e)}
        >
          用户名：<input type='text'/><br/><br/>
          密  码：<input type='password'/>
        </QfModal>

        <QfModal 
          type='delete'
          sures={this.state.sures}
          cancels={this.state.cancels}
          deletes={this.state.deletes}
          onCancel={(e)=>this.cancelHandle(e)}
          onDelete={(e)=>this.deleteHandle(e)}
        >
          <h3>你确定要删除吗</h3>
        </QfModal>

        <QfModal 
          sures={this.state.sures}
          cancels={this.state.cancels}
          deletes={this.state.deletes}
          onOk={(e)=>this.okHandle(e)}
        >
          <h3>you opened that you are not supposed to opened</h3>
        </QfModal>
      </div>
    )
  }
}