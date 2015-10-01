import { Component, PropTypes } from 'react'
import { spring, TransitionMotion } from 'react-motion'

export class Box extends Component {
  static displayName = 'Box'

  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render () {
    return <div className='Box' { ...this.props }>{ this.props.children }</div>
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

  getStyles () {
    let configs = {}
    this.state.boxes.forEach((key, idx) => {
      configs[key] = {
        opacity: spring(1),
        translateX: spring(idx * 210),
        translateY: spring(0),
        text: key
      }
    })
    return configs
  }

  willEnter (key, style) {
    return {
      opacity: spring(0),
      translateX: style.translateX,
      translateY: spring(-300),
      text: style.text
    }
  }

  willLeave (key, style) {
    return {
      opacity: spring(0),
      translateX: style.translateX,
      translateY: spring(-300),
      text: style.text
    }
  }

  handleClick (key) {
    const idx = this.state.boxes.indexOf(key)
    let newBoxes = this.state.boxes.slice(0)
    newBoxes.splice(idx, 1)
    this.setState({ boxes: newBoxes })
  }

  render () {
    return <div className='Test'>
      <TransitionMotion
        styles={ this.getStyles() }
        willEnter={ this.willEnter }
        willLeave={ this.willLeave }
      >
        { interpolatedStyles => {
          return <div>
            { Object.keys(interpolatedStyles).map(key => {
              const { translateX, translateY, text, ...style } = interpolatedStyles[key]
              return (
                <Box
                  key={ key }
                  style={{ transform: `translate3d(${translateX}px, ${translateY}px, 0)`, ...style }}
                  onClick={ this.handleClick.bind(this, key) }
                >
                  { text }
                </Box>
              )
            })}
          </div>
        }}
      </TransitionMotion>
    </div>
  }
}
