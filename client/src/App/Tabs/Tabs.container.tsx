import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Tabs, { Tab } from 'material-ui/Tabs';
import DocumentTitle from 'react-document-title';
import SwipeableViews from 'react-swipeable-views';

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

    onTabChange = (event: React.ChangeEvent<{}> | null, index: number) => {
        if (this.state.currentTab === index) { return; }

        this.setState({
            currentTab: index,
        }, () => {
            const to = this.props.tabs[index].to;
            this.props.history.push(to);
        });
    }

    onTabChangeIndex = (index: number) => {
        this.onTabChange(null, index);
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
            <div>
                <Tabs value={this.state.currentTab} onChange={this.onTabChange} fullWidth={true}>
                    {this.props.tabs.map(tabInfo => (
                        <Tab key={tabInfo.label} label={tabInfo.label} />
                    ))}
                </Tabs>
                <div>
                    <SwipeableViews
                        axis="x"
                        index={this.state.currentTab}
                        onChangeIndex={this.onTabChangeIndex}
                    >
                        {this.props.tabs.map(tabInfo => (
                            // <Route
                            //     key={tabInfo.label}
                            //     path={tabInfo.to}
                            //     render={() =>
                            <DocumentTitle title={`${tabInfo.label} | Greymind Turns`}>
                                <tabInfo.component />
                            </DocumentTitle>
                            // }
                            // />
                        ))}
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}

export default withRouter(TabBarContainer);