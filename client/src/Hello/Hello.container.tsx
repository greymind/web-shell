import Hello from './Hello';
import * as actions from './Hello.actions';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../Store';

export function mapStateToProps({ app }: StoreState) {
    return {
        enthusiasmLevel: app.enthusiasmLevel,
        name: app.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);