import Blog from "../components/Blog";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    blogEntries: state.blogEntries
  };
}
  


export default connect(mapStateToProps)(Blog);