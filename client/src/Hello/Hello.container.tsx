import Hello, { Props } from './Hello';
import { connect } from '../store/utilities';
import { Dispatch, HelloState } from './Hello.reducers';

export function mapStateToProps(state: { hello: HelloState }): Partial<Props> {
    const { hello } = state;
    
    return {
        name: hello.languageName,
        level: hello.enthusiasmLevel
    };
}

export function mapDispatchToProps(dispatch: { hello: Dispatch; }) {
    return dispatch.hello;
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);