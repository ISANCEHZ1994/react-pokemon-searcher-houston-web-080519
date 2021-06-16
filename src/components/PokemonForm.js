import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    console.log(event.target[0].value)
    this.props.addPokemon({
      name: event.target[0].value,
      stats: [{
        "value": 80,
        "name": "special-defense"
      },
      {
        "value": 80,
        "name": "special-attack"
      },
      {
        "value": 63,
        "name": "defense"
      },
      {
        "value": 62,
        "name": "attack"
      },
      {
        "value": 60,
        "name": "speed"
      },
      {
        "name": "hp",
        "value": event.target[1].value
      }
      ],
      sprites: {
        front: event.target[2].value,
        back: event.target[3].value
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
