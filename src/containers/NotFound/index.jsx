import React from 'react';
import './index.less';
import notFoundImg from '../../images/404.png'

export class NotFound extends React.Component{
  
  render(){
    return (
      <div className="page-error">
        <div className="img-wrapper">
          <img className="error-image" src={notFoundImg} />
          <h1>页面不存在</h1>
        </div>
      </div>
    )
  }
}