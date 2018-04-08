import * as React from 'react';
import { Tab } from './Tab';
import { Menu, SemanticWIDTHS } from 'semantic-ui-react';

export interface TabInfo {
    name: string;
    label: string;
    to: string;
}

export interface Props {
    tabs: TabInfo[];
    currentTab: string;
    onTabClick: (name: string) => void;
    widths: SemanticWIDTHS;
}

export const TabBar = (props: Props) => {
    return (
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
    );
};