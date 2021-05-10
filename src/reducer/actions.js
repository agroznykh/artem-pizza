export const ACTION_NAMES = {
    SET_SAVED: 'SET_SAVED',
    CHANGE_SIZE: 'CHANGE_SIZE',
    CHANGE_DOUGH: 'CHANGE_DOUGH',
    CHANGE_SAUCE: 'CHANGE_SAUCE',
    ADD_CHEESE: 'ADD_CHEESE',
    REMOVE_CHEESE: 'REMOVE_CHEESE',
    ADD_VEGETABLE: 'ADD_VEGETABLE',
    REMOVE_VEGETABLE: 'REMOVE_VEGETABLE',
    ADD_MEAT: 'ADD_MEAT',
    REMOVE_MEAT: 'REMOVE_MEAT',
}

const actionCreatorsFabric = () => {
    const actions = {}
    Object.keys(ACTION_NAMES).forEach(
        (actionName) => (actions[actionName] = (payload) => ({ type: actionName, payload }))
    )
    return actions
}

export const actions = actionCreatorsFabric()

export const actionSetSaved = actions.SET_SAVED
