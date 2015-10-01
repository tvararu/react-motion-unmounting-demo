import { Component, PropTypes } from 'react'

export class Box extends Component {
  static displayName = 'Box'

  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render () {
    return <div { ...this.props }>{ this.props.children }</div>
  }
}

export default class Test extends Component {
  static displayName = 'Test'

  state = {
    boxes: [
      'Mary',
      'Had',
      'A',
      'Little',
      'Lamb'
    ]
  }

  constructor (props) {
    super(props)
    require('./Test.css')
  }

  render () {
    return <div>{ this.state.boxes.map((val, idx) => <Box key={ idx }>{ val }</Box>) }</div>
  }
}
