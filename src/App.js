/* global marked */
import React, { Component } from 'react';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: "",
     // preview: "",
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange (event) {
    this.setState({
      input: event.target.value,     
    });
  }

  renderMarkdown (preview) {
    return { __html: marked(preview)}; // Use the global marked variable
  }

  render () {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div>
          <div className='half'>
            <h3>Edit here:</h3>
            <textarea id='editor' value={this.state.input} onChange={this.handleChange}></textarea>
          </div>
          <div className='half'>
            <h3>This is your preview:</h3>
            <div id='preview' dangerouslySetInnerHTML={this.renderMarkdown(this.state.preview)}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
