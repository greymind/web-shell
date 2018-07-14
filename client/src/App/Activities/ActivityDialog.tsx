import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../store/state';
import { ActivityInfo } from './Activities.state';

// Interfaces //////////////////////////////////////////////////////////////////

interface RouteProps {
    id: string;
}

export interface OnlyProps {
    activity: ActivityInfo;
}

export interface OnlyDispatch {
}

export interface Props extends OnlyProps, OnlyDispatch, RouteComponentProps<RouteProps> {
}

// Component ///////////////////////////////////////////////////////////////////

export const ActivityDialog = (props: Props) => (
    <div>
        <div>Hloa</div>
        <div>{props.match.params.id}</div>
        <div>{props.activity.name}</div>
    </div>
);

// Connect /////////////////////////////////////////////////////////////////////

function mapStateToProps(state: StoreState, ownProps: Props): OnlyProps {
    const { activities: { activities } } = state;
    const id = ownProps.match.params.id;

    return {
        activity: activities.find(activityInfo => activityInfo.id === id)!
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): OnlyDispatch {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityDialog));