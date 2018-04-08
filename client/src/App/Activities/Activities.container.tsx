import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import Activities, { Props } from './Activities';

import { maxBy } from 'lodash';

function mapStateToProps(state: StoreState, ownProps: Props): Partial<Props> {
    const { activities: { activities }, groups: { groups } } = state;

    return {
        activities: activities.map(activityInfo => ({
            ...activityInfo,
            groupName: groups.find(groupInfo => groupInfo.id === activityInfo.groupId)!.name,
            lastTurnAt: activityInfo.turns.length > 0
                ? maxBy(activityInfo.turns, turnInfo => turnInfo.timeStamp)!.timeStamp.toUTCString()
                : 'N/A'
        }))
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): Partial<Props> {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);