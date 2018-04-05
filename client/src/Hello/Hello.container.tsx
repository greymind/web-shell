import Hello, { Props, Dispatch } from './Hello';
import { connect } from '../store/utilities';
import { StoreState } from '../store';

export function mapStateToProps({ hello }: StoreState): Partial<Props> {
    return {
        name: hello.languageName,
        level: hello.enthusiasmLevel
    };
}

export function mapDispatchToProps(dispatch: { hello: Dispatch; }) {
    return dispatch.hello;
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);