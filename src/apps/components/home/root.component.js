import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './home.css'

const AnimationExample = () => (
  <Router basename="/home">
    <Route render={({ location }) => (
      <div id="aa1">
        <Route exact path="/home" />

        <ul style={styles.nav}>
          <NavLink to="/hsl/10/90/50">Red</NavLink>
          <NavLink to="/hsl/120/100/40">Green</NavLink>
          <NavLink to="/rgb/33/150/243">Blue</NavLink>
          <NavLink to="/rgb/240/98/146">Pink</NavLink>
        </ul>

        {/* <div id="aa2"> */}
          <TransitionGroup>
            {/* no different than other usage of
              CSSTransition, just make sure to pass
              `location` to `Switch` so it can match
              the old location as it animates out
            */}
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                {/* Without this `Route`, we would get errors during
                  the initial transition from `/` to `/hsl/10/90/50`
                */}
                {/* <Route render={() => <div>Not Found</div>} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      // </div>
    )} />
  </Router>
)

const NavLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: "inherit" }} />
  </li>
)

const HSL = ({ match: { params } }) => (
  <div
    style={{
      ...styles.result,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}
  >
    hsl({params.h}, {params.s}%, {params.l}%)
  </div>
)

const RGB = ({ match: { params } }) => (
  <div
    style={{
      ...styles.result,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}
  >
    rgb({params.r}, {params.g}, {params.b})
  </div>
)

const styles = {
  nav: {
    padding: 0,
    margin: 0,
    top: 0,
    height: "25px",
    width: "100%",
    display: "flex"
  },
  navItem: {
    textAlign: "center",
    flex: 1,
    listStyleType: "none",
    padding: "10px"
  },
  result: {
    position: "absolute",
    margin: "24px 16px",
    padding: "24px",
    minHeight: "280px",
    minWidth: "50%",
    color: "white",
    fontSize: "30px"
  }
}


export default AnimationExample
