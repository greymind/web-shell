import * as React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';

export interface TabInfo {
    label: string;
    to: string;
    component: React.ComponentType;
}

export interface Props {
    tabs: TabInfo[];
    currentTab?: number;
    changeTabAndLocation?: (value: number, location: string) => void;
}

export default (props: Props) => {
    const onTabChange = (event: React.ChangeEvent<{}>, value: number) => {
        const location = props.tabs[value].to;
        props.changeTabAndLocation!(value, location);
    };

    return (
        <Tabs value={props.currentTab} onChange={onTabChange} fullWidth={true}>
            {props.tabs.map(tabInfo => (
                <Tab key={tabInfo.label} label={tabInfo.label} />
            ))}
        </Tabs>
    );
};