import React, { Component } from 'react';
import HomeTitle from './components/HomeTitle.js';
import Section from './components/Section.js';
import webJson from './webData.json';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <HomeTitle />
        {
          webJson.map(sectionData =>
            <Section
              title={sectionData.title}
              dataList={sectionData.dataList}
              id={sectionData.id}
            />)
        }
      </div>
    );
  }
}
