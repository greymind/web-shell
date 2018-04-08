import * as React from 'react';
import { TabBar, TabInfo } from './TabBar';
import { SemanticWIDTHS } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router';

export interface Props extends RouteComponentProps<null> {
    tabs: TabInfo[];
    widths: SemanticWIDTHS;
}

export interface State {
    currentTab: string;
}

export class TabBarContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: this.getCurrentTabBasedOnLocation(props)
        };
    }

    getCurrentTabBasedOnLocation(props: Props) {
        const firstTab = props.tabs[0];

        const locationTab = props.tabs.find(tabInfo => {
            return tabInfo.to === props.location.pathname;
        }) || firstTab;

        return locationTab.name;
    }

    onTabClick = (name: string) => {
        this.setState({
            currentTab: name,
        });
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps !== this.props) {
            this.setState({
                currentTab: this.getCurrentTabBasedOnLocation(nextProps)
            });
        }
    }

    render() {
        return (
            <TabBar
                {...this.props}
                currentTab={this.state.currentTab}
                onTabClick={this.onTabClick}
            />
        );
    }
}

export default withRouter(TabBarContainer);