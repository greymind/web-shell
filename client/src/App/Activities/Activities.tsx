import * as React from 'react';
import List from 'material-ui/List';
import Activity, { Props as ActivityProps } from './Activity';
import {
    Dialog, AppBar, IconButton, Toolbar, Typography,
    Divider, ListItem, ListItemText, Button, Slide, withStyles, WithStyles
} from 'material-ui';
import CloseIcon from '@material-ui/icons/Close';

type WithStylesKeys = 'appBar' | 'flex';

export interface Props extends WithStyles<WithStylesKeys> {
    activities: ActivityProps[];
}

interface State {
    open: boolean;
}

function Transition(props: Props) {
    return <Slide direction="up" {...props} />;
}

const styles = {
    appBar: {
        position: 'relative',
    } as React.CSSProperties,
    flex: {
        flex: 1,
    },
};

class Activities extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleClickOpen = () => {
        setTimeout(() => {
            this.setState({ open: true });
        }, 800);
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <List>
                    {this.props.activities.map(activityInfo => (
                        <Activity key={activityInfo.id} {...activityInfo} openActivity={this.handleClickOpen} />
                    ))}
                </List>
                <Dialog
                    fullScreen={true}
                    open={this.state.open}
                    onClose={this.handleClose}
                    transition={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                className={`aut-${'closer'}`}
                                color="inherit"
                                onClick={this.handleClose}
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Sound
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button={true}>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button={true}>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(Activities);