import Hello, { Props } from './Hello';
import * as actions from './Hello.actions';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../store';

export function mapStateToProps({ app: { hello } }: StoreState): Props {
    return {
        enthusiasmLevel: hello.enthusiasmLevel,
        name: hello.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>): Partial<Props> {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);