import React, {Component} from 'react';
import {render} from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import Box from './box.jsx';

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red'
  },
  hover: {
    ':hover': {
      backgroundColor: 'red'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <p className={css(styles.red)}>hogehoge text hoge</p>
        <p className={css(styles.hover)}>fugafuga text fuga</p>
        <Box />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));