import React from 'react';
import ReactYoutube from './ReactYoutube';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
  render() {
    return(
      <div className='Home-wrapper'>
        <div className='button'>
          <Button />
        </div>
        <div className='Youtube'>
        <ReactYoutube videoId = "jFb2_-XiIuc" />
        <ReactYoutube videoId = "b9-cHk-7N8k" />
        <ReactYoutube videoId = "XQs5rtuTQPA" />
        </div>
      </div>
    )
  }
}

export default Home;