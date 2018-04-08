import * as React from 'react';
import { TabBar, TabInfo } from './TabBar';
import { SemanticWIDTHS } from 'semantic-ui-react';

export interface Props {
    tabs: TabInfo[];
    widths: SemanticWIDTHS;
}

export interface State {
    currentTab: string;
}

export class TabBarContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const firstTab = props.tabs[0];

        this.state = {
            currentTab: firstTab.name
        };
    }

    onTabClick = (name: string) => {
        this.setState({
            currentTab: name,
        });
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