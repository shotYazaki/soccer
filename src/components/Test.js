//updateProgressBar(){
    let timeDurration = this.props.playUntil - this.props.playFrom;
    let timeRunning = this.state.eventVideo?.target?.getCurrentTime() - this.props.playFrom;
    let percentage = Math.floor((timeRunning / timeDurration) * 100);
    this.setState((prevState) =>  {
      if (prevState.progressBar < percentage){
        return { progressBar: percentage };
      }
    });
  //}