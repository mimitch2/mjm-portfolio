// import React from 'react'
// import '../css/App.css'




// const Loading = (props) => {
// //   const loadingDiv = document.getElementById("loading-div")

//   setTimeout(() => {
//     document.getElementById("loading-div").className = "loading hidden"
//   }, 3000);
//   return (
//     <div className="loading" id="loading-div">
//       <h1 className="loading-letter1 letter ast">•</h1>
//       <h1 className="loading-letter2 letter ast">•</h1>
//       <h1 className="loading-letter3 letter ast">•&nbsp;</h1>
//       <h1 className="loading-letter4 letter">L</h1>
//       <h1 className="loading-letter5 letter">o</h1>
//       <h1 className="loading-letter6 letter">a</h1>
//       <h1 className="loading-letter7 letter">d</h1>
//       <h1 className="loading-letter8 letter">i</h1>
//       <h1 className="loading-letter9 letter">n</h1>
//       <h1 className="loading-letter10 letter">g</h1>
//       <h1 className="loading-letter11 letter ast">&nbsp;•</h1>
//       <h1 className="loading-letter12 letter ast">•</h1>
//       <h1 className="loading-letter13 letter ast">•</h1>
//     </div>
//   )
// }

// export default Loading;
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    width: "35vw",
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {main: "#DC5620" }
  },
});

function LinearIndeterminate(props) {
  setTimeout(() => {
    document.getElementById("loading-div").className = "loading hidden"
  }, 3000);

  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className="loading" id="loading-div">
        <div className={classes.root}>
          <span className="letter">LOADING</span>
          <LinearProgress color="primary" />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);
