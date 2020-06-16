const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, event) => {
    switch (event.type) {
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget._id === event.updatedWidget._id ?
                        event.updatedWidget : widget
                )
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: event.widgets
            }
        case "FIND_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget._id === event.widget._id ?
                        event.widget : widget
                )
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    event.newWidget
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget._id !== event.widgetId)
            }
        case "MOVE_UP":
            let index = state.indexOf(event.widget);
            state.move(index, index - 1);
            return state.splice(0);
        case "MOVE_DOWN":
            let position = state.widgets.indexOf(event.widget);
            state.widgets.move(position, position + 1);
            return state.widgets.splice(0);
        case "CHANGE_TYPE":
            let newState = JSON.parse(JSON.stringify(state.widgets))
            let newIndex = newState.widgets.findIndex((widget) => {
                return widget.id === event.id})
            newState.widgets[newIndex].type = event.newType
            return newState
        case "CHANGE_HEADING":
            let headState = JSON.parse(JSON.stringify(state.widgets))
            let headIndex = headState.widgets.findIndex((widget) => {
                return widget.id === event.id})
            headState.widgets[headIndex].type = event.newHeading
            return headState
        default:
            return state;
    }
}

export default widgetReducer