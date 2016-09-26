import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  box: {
    border: 'double 3px blue'
  }
});

export default class Box extends Component {
  render() {
    return (
      <div className={css(styles.box)}>
        <span>box</span>
      </div>
    );
  }
}
