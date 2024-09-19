// Write your code here
import './index.css'
import {Component} from 'react'
class CashWithdrawal extends Component {
  state={count:2000}
  fiftyRupis=()=>{
    this.setState(prev =>({
      count:prev.count-50
    }))
  }
  hundredRupis=()=>{
    this.setState(prev =>({
      count:prev.count-100
    }))
  }
  twoHundredRupis=()=>{
    this.setState(prev =>({
      count:prev.count-200
    }))
  }
  fiveHundredRupis=()=>{
    this.setState(prev =>({
      count:prev.count-500
    }))
  }
  render() {
    const {count}=this.state
    return (
      <div className="container">
        <div className="cardContainer">
          <button className="letterBox">S</button>
          <h1 className="heading">Sarah Williams</h1>
        </div>
        <div className="container1">
          <p className="MainBal">Your Balance</p>
          <p className="countValue">{count}</p>
        </div>
        <p className="Inrupes">In Rupees</p>
        <p className="Withdraw ">Withdraw</p>
        <p className="text">CHOOSE SUM (IN RUPEES)</p>
        <ul>
        <div className="boxRow1">
          <li><button className="boxA" onClick={this.fiftyRupis}>50</button></li>
          <li><button className="boxB" onClick={this.hundredRupis}>100</button></li>
        </div>
        <div className="boxRow1">
          <li><button className="boxA" onClick={this.twoHundredRupis}>200</button></li>
          <li><button className="boxB" onClick={this.fiveHundredRupis}>500</button></li>
        </div></ul>
      </div>
    )
  }
}
export default CashWithdrawal
