import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../store/state';
import Hello, { Props } from './Hello';
import { incrementEnthusiasm, decrementEnthusiasm } from './Hello.reducers';

export function mapStateToProps({ hello }: StoreState): Partial<Props> {
    return {
        name: hello.languageName,
        level: hello.enthusiasmLevel
    };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>, getState: StoreState): Partial<Props> {
    return {
        incrementEnthusiasm: () => dispatch(incrementEnthusiasm()),
        decrementEnthusiasm: () => dispatch(decrementEnthusiasm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);