import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    // o unico lugar onde o state é alterado diretamente é no construtor
    this.state = { term: '' }
  }

  /* handlerOnChage (event) {
    console.log(event.target.value)
  } */

  render () {
    return (
      <div>
        <FormGroup>
          <FormControl
            type='text'
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </FormGroup>
        {/* value of input: {this.state.term} */}
      </div>
    )
  }

  onInputChange (term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }
}
