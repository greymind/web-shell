// import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import { People, Props } from './People';

function mapStateToProps({ people }: StoreState, ownProps: Props): Partial<Props> {
    return {
        ...people
    };
}

// function mapDispatchToProps(dispatch: Dispatch<StoreState>, getState: StoreState): Partial<Props> {
//     return {

//     };
// }

export default connect(mapStateToProps)(People);