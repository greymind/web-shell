import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../store/state';
import { TabInfo } from './TabInfo';
import { withRouter, RouteComponentProps } from 'react-router';
import { changeTab } from './actions/Tabs.changeTab';

export interface Props extends RouteComponentProps<null> {
    tabs: TabInfo[];
    currentTab?: number;
    changeTab?: (index: number) => void;
}

export class Navigator extends React.Component<Props> {
    getCurrentTabBasedOnLocation(props: Props) {
        const firstTab = 0;

        const locationTab = props.tabs.findIndex(tabInfo => {
            return tabInfo.to === props.location.pathname;
        });

        return Math.max(locationTab, firstTab);
    }

    componentWillReceiveProps(nextProps: Props) {
        const getPathname = (props: Props) => props.location.pathname;

        if (getPathname(nextProps) !== getPathname(this.props)) {
            const newTab = this.getCurrentTabBasedOnLocation(nextProps);

            if (nextProps.currentTab !== newTab) {
                this.props.changeTab!(newTab);
            }
        }
    }

    render() {
        return (<div />);
    }
}

function mapStateToProps({ tabs }: StoreState, ownProps: Props): Partial<Props> {
    return {
        tabs: ownProps.tabs,
        currentTab: tabs.currentTab
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): Partial<Props> {
    return {
        changeTab: (index: number) => {
            dispatch(changeTab(index));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigator));