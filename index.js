import React, { Component, PropTypes } from 'react';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesDemo'>
	    test2:<br/>
	    <ModuleDemo text="test child"></ModuleDemo>
      </div>
    );
	  
  }
}

export default ModuleDemo;
