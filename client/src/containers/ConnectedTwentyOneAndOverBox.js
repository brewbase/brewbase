import {connect} from 'react-redux';
import TwentyOneAndOverBox from '../components/TwentyOneAndOverBox';

const mapStateToProps = (state) => ({
    //Selectors
})

const mapDispatchToProps = (dispatch) => ({
    //Teach connected component to update the store
})

const ConnectedTwentyOneAndOverBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(TwentyOneAndOverBox);

export default ConnectedTwentyOneAndOverBox;
