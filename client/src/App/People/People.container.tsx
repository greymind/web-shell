import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import { People, Props } from './People';

function mapStateToProps({ people }: StoreState, ownProps: Props): Partial<Props> {
    return {
        ...people
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): Partial<Props> {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(People);