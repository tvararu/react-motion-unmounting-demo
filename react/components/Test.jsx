import { Component } from 'react'

export default class Test extends Component {
  static displayName = 'Test'

  constructor (props) {
    super(props)
    require('./Test.css')
  }

  render () {
    return <div>Hello world!</div>
  }
}
