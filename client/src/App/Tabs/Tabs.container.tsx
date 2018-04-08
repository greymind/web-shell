import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Tabs, { Tab } from 'material-ui/Tabs';

export interface TabInfo {
    label: string;
    to: string;
    component: React.ComponentType;
}

export interface Props extends RouteComponentProps<null> {
    tabs: TabInfo[];
}

export interface State {
    currentTab: number;
}

export class TabBarContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: this.getCurrentTabBasedOnLocation(props)
        };
    }

    getCurrentTabBasedOnLocation(props: Props) {
        const firstTab = 0;

        const locationTab = props.tabs.findIndex(tabInfo => {
            return tabInfo.to === props.location.pathname;
        });

        return Math.max(locationTab, firstTab);
    }

    onTabChange = (event: React.ChangeEvent<{}> | null, value: number) => {
        if (this.state.currentTab === value) { return; }

        this.setState({
            currentTab: value,
        }, () => {
            const to = this.props.tabs[value].to;
            this.props.history.push(to);
        });
    }

    componentWillReceiveProps(nextProps: Props) {
        const getPathname = (props: Props) => props.location.pathname;

        if (getPathname(nextProps) !== getPathname(this.props)) {
            this.setState({
                currentTab: this.getCurrentTabBasedOnLocation(nextProps),
            });
        }
    }

    render() {
        return (
            <Tabs value={this.state.currentTab} onChange={this.onTabChange} centered={true}>
                {this.props.tabs.map(tabInfo => (
                    <Tab label={tabInfo.label} />
                ))}
            </Tabs>
        );
    }
}

export default withRouter(TabBarContainer);