
import App from "./App";
import { connect } from "react-redux";
import { changeUrl } from "./actions";

function mapStateToProps(state) {
  return {
    url: state.url,
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    set: function (url) {
      const action = changeUrl(url);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);