import TabsState from '../Tabs.state';
import { Dispatch } from 'react-redux';
import { StoreState } from '../../../store/state';
import { push, goBack as historyGoBack } from 'connected-react-router';

export const _changeTab = 'Tabs/changeTab';

export const changeTab = (newTab: number) => ({
    type: _changeTab,
    newTab
});

export const changeLocation = (location: string) => {
    return (dispatch: Dispatch<StoreState>) => {
        dispatch(push(location));
    };
};

export const changeTabAndLocation = (newTab: number, location: string) => {
    return (dispatch: Dispatch<StoreState>) => {
        dispatch(changeTab(newTab));
        changeLocation(location);
    };
};

export const goBack = () => {
    return (dispatch: Dispatch<StoreState>) => {
        dispatch(historyGoBack());
    };
};

export const changeTabMock = changeTab(0);
// type x = typeof changeTab;

export const changeTabReducer =
    (state: TabsState, action: typeof changeTabMock): TabsState => {
        if (action.type === _changeTab) {
            return {
                ...state,
                currentTab: action.newTab
            };
        }

        return state;
    };