import React from 'react';
import CopyCat from '../components/CopyCat';

export default class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true, input: '',
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying});
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return <CopyCat copying={this.state.copying}
                    input={this.state.input}
                    handleChange={this.handleChange}
                    toggleTape={this.toggleTape}/>;
  };
}