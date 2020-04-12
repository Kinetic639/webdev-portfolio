import React from "react";

const ImgFrame = (props) => {
  const classes = ['img-frame', props.class]
  const frameStyle = {
    width: props.width,
    height: props.height ? props.height : props.width,
    top: '50%',
    right: '-30%',
    opacity: props.opacity,
  }
  return <div style={frameStyle} className={classes.join(' ')}></div>
};

export default ImgFrame;

/*
width: props.width,
    height: props.height ? props.height : props.width,
    backgroundColor: props.backgroundColor ? props.backgroundColor : "red",
    */
