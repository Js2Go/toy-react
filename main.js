import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
  render() {
    return <div {...this.props}>
      <div>My component</div>
      { this.children }
    </div>
  }
}

render(<MyComponent id="a" class="c">
  <div>abc</div>
  <div class="ennn"></div>
  <div></div>
</MyComponent>, document.body)
