import React from "react";
import HelloAntD from './hello/antd';

/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/

const AnimationExample = () => (
  <div style={styles.fill}>
    <HelloAntD
      message="Hello simple React webpack boilerplate"
    />
  </div>
);


const styles = {};

styles.fill = {
  marginTop: "64px",
  position: "absolute",
  left: 0,
  right: 0,
  top: "64px",
  bottom: 0
};

styles.content = {
  marginTop: "0",
  top: "0",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  // marginTop: "74px",
  position: "absolute",
  top: 0,
  height: "25px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

export default AnimationExample;