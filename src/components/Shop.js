import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export default function Shop() {
  const dispatch = useDispatch();
  const {withdrawMoney, despositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary ms-2" onClick={()=>{dispatch(actionCreators.despositMoney(100))}}>+</button>
      Update Balance
      <button className="btn btn-primary ms-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> */}
      <button className="btn btn-primary ms-2" onClick={()=>{despositMoney(100)}}>+</button>
      Update Balance
      <button className="btn btn-primary ms-2" onClick={()=>{withdrawMoney(100)}}>-</button>
    </div>
  )
}
