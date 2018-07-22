
import App from "./App";
import { connect } from "react-redux";
import { changeUrl } from "./actions";

function mapStateToProps(state) {
  return {
    url: state.url,
    cssShow: state.cssShow
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    setURL: function (url) {
      const action = changeUrl(url);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);