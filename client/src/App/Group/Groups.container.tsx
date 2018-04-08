import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import Group, { Props } from './Groups';

function mapStateToProps(state: StoreState, ownProps: Props): Partial<Props> {
    const { group, people: { people } } = state;

    return {
        groups: group.groups.map(groupInfo => ({
            ...groupInfo,
            peopleNames: groupInfo.people
                .map(personId => people.find(p => p.id === personId)!.name)
        }))
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): Partial<Props> {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);