import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { TabInfo } from './TabInfo';
import DocumentTitle from 'react-document-title';

export interface Props {
    tabs: TabInfo[];
    currentTab?: number;
    changeTabAndLocation?: (index: number, location: string) => void;
}

export default (props: Props) => {
    const style: React.CSSProperties = {
        overflowY: 'scroll'
    };

    const onTabIndexChange = (index: number) => {
        const location = props.tabs[index].to;
        props.changeTabAndLocation!(index, location);
    };

    return (
        <SwipeableViews
            axis="x"
            index={props.currentTab}
            onChangeIndex={onTabIndexChange}
            resistance={true}
            style={style}
        >
            {props.tabs.map(tabInfo => (
                <DocumentTitle key={tabInfo.label} title={`${tabInfo.label} | Greymind Turns`}>
                    <tabInfo.component />
                </DocumentTitle>
            ))}
        </SwipeableViews>
    );
};