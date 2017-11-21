import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.srting,
    dataList: PropTypes.array,
  }
  render() {
    const { title, id, dataList } = this.props;
    return (
      <div className="section" id={id}>
        hi this is section
        <h2>{title}</h2>
        {
          dataList.map(
            data =>
              <Card
                name={data.name}
                description={data.description}
                img={data.img}
                repUrl={data.repUrl}
                demoUrl={data.demoUrl}

              />
          )
        }
      </div>
    );
  }
}
