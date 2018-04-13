import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../store/state';
import { TabInfo } from './TabInfo';
import { withRouter, RouteComponentProps } from 'react-router';
import { changeTab, changeLocation } from './actions/Tabs.changeTab';

export interface Props extends RouteComponentProps<null> {
    tabs: TabInfo[];
    currentTab?: number;
    changeTab?: (index: number) => void;
    changeLocation?: (location: string) => void;
}

export class Navigator extends React.Component<Props> {
    getCurrentTabBasedOnLocation(props: Props) {
        const firstTab = 0;

        const locationTab = props.tabs.findIndex(tabInfo => {
            return tabInfo.to === props.location.pathname;
        });

        return Math.max(locationTab, firstTab);
    }

    componentDidMount() {
        const newTab = this.getCurrentTabBasedOnLocation(this.props);

        if (this.props.currentTab !== newTab) {
            this.props.changeTab!(newTab);
        }
    }

    componentWillReceiveProps(nextProps: Props) {
        const getPathname = (props: Props) => props.location.pathname;
        const newTab = this.getCurrentTabBasedOnLocation(nextProps);

        if (getPathname(nextProps) !== getPathname(this.props)) {
            if (nextProps.currentTab !== newTab) {
                this.props.changeTab!(newTab);
            }
        } else if (nextProps.currentTab !== newTab) {
            this.props.changeLocation!(this.props.tabs[nextProps.currentTab!].to);
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
        },
        changeLocation: (location: string) => {
            dispatch(changeLocation(location));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigator));