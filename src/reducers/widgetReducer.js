const initialState = {
    widgets: []
}
/*
const myData = [].concat(this.state.data)
    .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
    .map((item, i) =>
        <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
    );
*/
const widgetReducer = (state = initialState, event) => {
    switch (event.type) {
        /*
            case "UPDATE_WIDGET":
                return {
                    ...state,
                    widgets: state.widgets.map(widget => widget.id === action.wid ? action.widget : widget)
                }
         */
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === event.updatedWidget.id ?
                        event.updatedWidget : widget
                )
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: event.widgets
            }
        case "FIND_WIDGET":
            return event.widget
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    event.newWidget
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== event.widgetId)
            }
        case "MOVE_UP":
            let arr = state.widgets.map(
                widget => widget.id === event.widget.id ?
                    {
                        ...widget,
                        widgetOrder: event.widget.widgetOrder - 1
                    } : widget
            )
            return {
                ...state,
                widgets: arr.map(
                    widget => widget.widgetOrder === event.widget.widgetOrder - 1
                        && widget.id !== event.widget.id ?
                        {
                            ...widget,
                            widgetOrder: event.widget.widgetOrder
                        } : widget
                )
            }
        case "MOVE_DOWN":
            let temp = state.widgets.map(
                widget => widget.id === event.widget.id ?
                    {
                        ...widget,
                        widgetOrder: event.widget.widgetOrder + 1
                    } : widget
            )
            return {
                ...state,
                widgets: temp.map(
                    widget => widget.widgetOrder === event.widget.widgetOrder + 1
                        && widget.id !== event.widget.id ?
                        {
                            ...widget,
                            widgetOrder: event.widget.widgetOrder
                        } : widget
                )
            }
        case "CHANGE_TYPE":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === event.widget.id ?
                        {
                            ...widget,
                            type: event.newType
                        } : widget
                )
            }
        default:
            return state;
    }
}

export default widgetReducer