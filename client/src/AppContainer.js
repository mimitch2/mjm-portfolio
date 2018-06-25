
import App from "./App";
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    url: state.url,
  };
}
  

export default connect(mapStateToProps)(App);