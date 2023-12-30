import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: false, lastCard: false}

  First = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  Last = () => {
    this.setState(prevState => ({lastCard: !prevState.lastCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="names-container">
            <div className="container">
              <button className="button" type="button" onClick={this.First}>
                Show/Hide Firstname
              </button>
              {firstCard ? <p className="card">Joe</p> : null}
            </div>
            <div className="container">
              <button className="button" type="button" onClick={this.Last}>
                Show/Hide Lastname
              </button>
              {lastCard ? <p className="card">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
