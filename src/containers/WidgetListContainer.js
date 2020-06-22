import { connect } from "react-redux";
import WidgetListComponent from '../components/WidgetListComponent'
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        widgets: state.widgetReducer.widgets,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            WidgetService.findWidgetsForTopic(topicId)
                .then(actualWidgets => dispatch({
                    type: 'FIND_WIDGETS_FOR_TOPIC',
                    widgets: actualWidgets
                }))
        },
        findWidgetById: (widgetId) => {
            WidgetService.findWidgetById(widgetId)
                .then(actualWidget => dispatch({
                    type: 'FIND_WIDGET',
                    widget: actualWidget
                }))
        },
        /*
            updateWidget: (wid, widget) => {
                dispatcher({
                    type: "UPDATE_WIDGET",
                    wid: wid,
                    widget: widget
                })
            },
         */
        updateWidget: (widgetId, newWidget) => {
            WidgetService.updateWidget(widgetId, newWidget)
                .then(status => dispatch({
                    type: 'UPDATE_WIDGET',
                    updatedWidget: newWidget
                }))
        },
        createWidget: (topicId, newWidget) => {
            WidgetService.createWidget(topicId, newWidget)
                .then(actualNewWidget => dispatch({
                    type: "CREATE_WIDGET",
                    newWidget: actualNewWidget
                }))
        },
        deleteWidget: (widgetId) => {
            WidgetService.deleteWidget(widgetId)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetId: widgetId
                }))
        },
        positionUp: (widgetId) => {
            WidgetService.findWidgetById(widgetId)
                .then(actualWidget => dispatch({
                    type: "MOVE_UP",
                    widget: actualWidget
                }))
        },
        positionDown: (widgetId) => {
            WidgetService.findWidgetById(widgetId)
                .then(actualWidget => dispatch({
                    type: "MOVE_DOWN",
                    widget: actualWidget
                }))
        },
        changeType: (widgetId, newType) => {
            WidgetService.findWidgetById(widgetId)
                .then(actualWidget => dispatch({
                    type: "CHANGE_TYPE",
                    widget: actualWidget,
                    newType: newType
                }))
        }
    }
}

const WidgetListContainer = connect
    (stateToPropertyMapper, dispatchToPropertyMapper)
    (WidgetListComponent)

export default WidgetListContainer
