import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../../store/state';
import Group, { Props } from './Groups';

function mapStateToProps(state: StoreState, ownProps: Props): Partial<Props> {
    const { groups: { groups }, people: { people } } = state;

    return {
        groups: groups.map(groupInfo => ({
            ...groupInfo,
            peopleNames: groupInfo.peopleIds
                .map(personId => people.find(p => p.id === personId)!.name)
        }))
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: Props): Partial<Props> {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);