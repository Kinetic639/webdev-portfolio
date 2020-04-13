import React from "react";

const ImgFrame = ({width, height, opacity, classList}) => {
  const classes = ['img-frame', classList]
  const {innerWidth} = window;
  const frameStyle = {
    width: width,
    height: height ? height : width,
    top: '50%',
    // left: `0`,
    left: window.innerWidth < 400 ? `${0 + (innerWidth/50)}%` : `${40 + (innerWidth/50)}%`,
    opacity: opacity,
  }
  return <div style={frameStyle} className={classes.join(' ')}></div>
};

export default ImgFrame;

/*
width: props.width,
    height: props.height ? props.height : props.width,
    backgroundColor: props.backgroundColor ? props.backgroundColor : "red",
    */
