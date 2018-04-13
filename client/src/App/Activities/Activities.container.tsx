import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import Activities, { OnlyProps, OnlyDispatch } from './Activities';

import { maxBy, orderBy } from 'lodash';
import { changeLocation, goBack } from '../Tabs/actions/Tabs.changeTab';

function mapStateToProps(state: StoreState, ownProps: OnlyProps): OnlyProps {
    const { activities: { activities }, groups: { groups } } = state;

    return {
        activities: orderBy(
            activities.map(activityInfo => ({
                ...activityInfo,
                groupName: groups.find(groupInfo => groupInfo.id === activityInfo.groupId)!.name,
                lastTurnAt: activityInfo.turns.length > 0
                    ? maxBy(activityInfo.turns, turnInfo => turnInfo.timeStamp)!.timeStamp.getTime()
                    : 0
            })),
            activityInfo => activityInfo.lastTurnAt,
            'desc'
        )
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: OnlyProps): OnlyDispatch {
    return {
        changeLocation: (location: string) => {
            dispatch(changeLocation(location));
        },
        goBack: () => {
            dispatch(goBack());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);