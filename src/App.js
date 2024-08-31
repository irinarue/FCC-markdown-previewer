import React, { Component } from 'react';
import {marked} from 'marked';
import './App.css'

marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      input: "# Welcome to the React Markdown Previewer!\n\n## You can adapt this editor to your liking and watch the changes in the previewer\n\n\n ### Here are some ideas:\n You can add some code inbetween backticks, like this: `<span></span>`\n\n```\n//or you can add multi-line code:\n\nfunction anExample (love) {\n if(love = true){\n  return 'she loves you';\n }\n}\n```\nYou can make text **bold**, _italic_, **_both_** or ~~cross stuff out~~\n\nIf you want you can add [links](https://kiriphuket.com/) of your favourite restaurant.\n >  And make Block Quotes!\n\n You can even add tables:\n\nWild Header | Crazy Header\n------------- | -------------\nYour content can be here |  and it can be here too.\nAnd here. | Okay.\n\n- You can also make lists.\n  - With different indentation.\n    - Maybe as bullets\n       - Or somthing else.\n\n1. You can also make numbered lists.\n1. But you always use the number one.\n1. Even if its the third point\n\nAnd finally you can also add images:\n![Happy Hacking](https://cdn.icon-icons.com/icons2/1468/PNG/512/hacker_101114.png)"
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange (event) {
    this.setState({
      input: event.target.value,     
    });
    console.log(this.state.input);
  }

  renderMarkdown (preview) {
    return { __html: marked(preview)};
  }

  render () {
    return (
      <div className="App">
        <h1 id='mainTitle'>Markdown Previewer</h1>
        <div>
          <div className='half'>
            <h3 className='mainSub'>Edit here:</h3>
            <textarea id='editor' value={this.state.input} onChange={this.handleChange}></textarea>
          </div>
          <div className='half'>
            <h3 className='mainSub'>This is your preview:</h3>
            <div id='preview' dangerouslySetInnerHTML={this.renderMarkdown(this.state.input)}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
