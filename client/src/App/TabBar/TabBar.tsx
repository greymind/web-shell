import * as React from 'react';
import { Tab } from './Tab';
import { Menu, SemanticWIDTHS, Segment } from 'semantic-ui-react';
import { Route, RouteComponentProps } from 'react-router';

export interface TabInfo {
    name: string;
    label: string;
    to: string;
    // tslint:disable-next-line:no-any
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export interface Props {
    tabs: TabInfo[];
    currentTab: string;
    onTabClick: (name: string) => void;
    widths: SemanticWIDTHS;
}

export const TabBar = (props: Props) => {
    return (
        <div>
            <Menu pointing={true} secondary={true} size="massive" fluid={true} widths={props.widths}>
                {props.tabs.map(tabInfo => (
                    <Tab
                        name={tabInfo.name}
                        label={tabInfo.label}
                        to={tabInfo.to}
                        active={props.currentTab === tabInfo.name}
                        onClick={props.onTabClick}
                    />
                ))}
            </Menu>

            <Segment>
                {props.tabs.map(tabInfo => (
                    <Route path={tabInfo.to} component={tabInfo.component} />
                ))}
            </Segment>
        </div>
    );
};