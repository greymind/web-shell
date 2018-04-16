import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import * as H from 'history';
import { Dialog, DialogTitle } from 'material-ui';

export interface Props extends RouteComponentProps<{}> { }

export interface State {
    open: boolean;
}

export class GreyFlowWrapper extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false
        };
    }

    onContextMenu = (event: PointerEvent) => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    componentDidMount() {
        this.props.history.listen((location: H.Location, action: H.Action) => {
            this.setState({
                open: false
            });
        });

        document.addEventListener('contextmenu', this.onContextMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this.onContextMenu);
    }

    render() {
        const style = {
            height: '100%'
        };

        const classes = {
            root: 'abc'
        };

        return (
            <div style={style}>
                {this.props.children}
                <Dialog
                    classes={classes}
                    open={this.state.open}
                    onClose={this.handleClose}
                    disableBackdropClick={true}
                    disableEscapeKeyDown={true}
                >
                    <DialogTitle>Select action</DialogTitle>
                    <div>
                        Hello!
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default withRouter(GreyFlowWrapper);