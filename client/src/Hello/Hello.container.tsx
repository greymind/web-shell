import Hello, { Dispatch } from './Hello';
import { connect } from '../store/utilities';
import { StoreState } from '../store';

export function mapStateToProps({ hello }: StoreState) {
    return hello;
}

export function mapDispatchToProps(dispatch: { hello: Dispatch; }) {
    return dispatch.hello;
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);