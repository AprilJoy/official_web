import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Card.less';

export default class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    repUrl: PropTypes.string,
    demoUrl: PropTypes.string
  }
  render() {
    const {
      name,
      description,
      img,
      repUrl,
      demoUrl
    } = this.props;
    const bgStyle = {
      backgroundImage: `URL("${img}")`
    };
    return (
      <div className="card">
        <div className="bgimg" style={bgStyle}/>
        <div className="buttons">
          <a href={repUrl} rel="noopener noreferrer" target="_blank">
            <div className="circle demo"><FontAwesome name="bath"/></div>
          </a>
          <a href={demoUrl} rel="noopener noreferrer" target="_blank">
            <div className="circle repo"><FontAwesome name="github-alt" /></div>
          </a>

        </div>
        <div className="cardInfo">
          <div className="tittle"> {name}</div>
          <div className="des">{description}</div>
        </div>
      </div>
    );
  }
}
