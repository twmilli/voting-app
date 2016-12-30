import React from 'react';

export default React.createClass({
  render(){
    return (
      <div className="sent">
        <h2>A link has been sent to your email!</h2>
        <h3>Please check your inbox and click on the link provided.</h3>
        <h4>If you can't find it, check your junk folder.</h4>
      </div>
    )
  }
});
