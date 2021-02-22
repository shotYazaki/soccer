import React from 'react';
import { Col, Button,　ProgressBar } from 'react-bootstrap';
import Proptypes from 'prop-types';
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=-_pgcFQ0l64
// https://youtu.be/-_pgcFQ0l64
// https://www.youtube.com/watch?v=-_pgcFQ0l64&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
export default class ReactYoutube extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventVideo: {},
      responsed: false,
      isToogle: false,
      playbackRate: 1,
      progressBar: 0,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.repeat = this.repeat.bind(this);
    this.stop = this.stop.bind(this);
  }


  play() {
    let video = this.state.eventVideo?.target;

    video?.playVideo();

    if(video?.getPlayerState() === 1){
      this.setState({isToogle: true});
    }
  };

  pause() {
    let video = this.state.eventVideo?.target;
    video?.pauseVideo();
    if(video?.getPlayerState() === 2){
      this.setState({isToogle: false});
    }
  };

  repeat() {
    this.play();
  };

  stop() {
    let video = this.state.eventVideo?.target;
    video?.stopVideo();
  }

  updateProgressBar(){
    let timeDurration = this.props.skitDetail?.playUntil - this.props.skitDetail?.playFrom;
    let timeRunning = this.state.eventVideo?.target?.getCurrentTime() - this.props.skitDetail?.playFrom;
    let percentage = Math.floor((timeRunning / timeDurration) * 100);
    this.setState((prevState) =>  {
      if (prevState.progressBar < percentage){
        return { progressBar: percentage };
      }
    });
  }

  render () {
    let self = this;

    const _onPlay = () => {
      self.play();
    };

    const _onReady = (event) => {
      self.setState({ eventVideo: event });
      self.play();
    };

    const _onPause = () => {
      self.pause();
    };

    const _onEnd = () => {
      self.repeat();
    };

    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        loop: 1,
        autoplay: 1,
        controls: 0,
        fs: 0,
        playsinline: 1,
        cc_load_policy: 3,
        rel: 0,
      }
    };
    const {videoId} = this.props
    return (
      <React.Fragment>
        <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} xs={12} className="p-0 p-sm-1 p-md-2 p-lg-3">
          <div className={"auto-resizable-iframe"}>
            <Button variant="primary" size="lg" onClick={this.play}>Play</Button>
            <Button variant="primary" size="lg" onClick={this.pause}>pause</Button>
            <Button variant="primary" size="lg" onClick={this.stop}>stop</Button>
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={_onReady}
              onPlay={_onPlay}
              onPause={_onPause}
              onEnd={_onEnd}
            />
          </div>
          <ProgressBar className="b-progress-bar" now={this.props.progressBar} />
        </Col>
      </React.Fragment>
    );
  }
}

ReactYoutube.propTypes = {
  skitDetail: Proptypes.object,
  dispatch: Proptypes.func,
  math: Proptypes.shape({
    params: Proptypes.shape({
      sklitId: Proptypes.string
    }),
  }),
};
