import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import TabContent, { Props } from './TabContent';

import { changeTabAndLocation } from './actions/Tabs.changeTab';

function mapStateToProps({ tabs }: StoreState, ownProps: Props): Partial<Props> {
    return {
        tabs: ownProps.tabs,
        currentTab: tabs.currentTab
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): Partial<Props> {
    return {
        changeTabAndLocation: (index: number, location: string) => {
            dispatch(changeTabAndLocation(index, location));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);