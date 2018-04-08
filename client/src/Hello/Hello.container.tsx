import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../store/state';
import Hello, { Props } from './Hello';

import { incrementEnthusiasm } from './actions/incrementEnthusiasm.action';
import { decrementEnthusiasm } from './actions/decrementEnthusiasm.action';

function mapStateToProps({ people }: StoreState): Partial<Props> {
    return {
        name: 'Lang',
        level: 1
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, getState: StoreState): Partial<Props> {
    return {
        incrementEnthusiasm: () => dispatch(incrementEnthusiasm()),
        decrementEnthusiasm: () => dispatch(decrementEnthusiasm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);