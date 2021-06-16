import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  flipHandler = () => {

    console.log('Flip Image!')

    const isFliped = this.state.flipped;
    this.setState({flipped: !isFliped})

  //   this.setState({
  //     flipped: true
  //   })
  //   if(flipped === true){
  //     src={this.props.backSprite}
  //   }

   } // closes flipHandler

  render() {
    return (
      <Card>
        <div onClick={() => this.flipHandler()}>
          <div className="image">
            { this.state.flipped ? <img alt="oh no!" src={this.props.backSprite}/> : <img alt="oh no!" src={this.props.frontSprite}/> }
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
