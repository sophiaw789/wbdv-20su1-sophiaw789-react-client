const findWidgetById = (widgetId) => {
    return fetch(`https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/widgets/${widgetId}`)
        .then(response => response.json())
}

const findWidgetsForTopic = (tid) => {
    return fetch(`https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/topics/${tid}/widgets`)
        .then(response => response.json())
}

const deleteWidget = (widgetId) => {
    return fetch(`https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateWidget = (widgetId, newWidget) =>
    fetch(`https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createWidget = (tid, widget) =>
    fetch(`https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findWidgetById,
    deleteWidget,
    createWidget,
    updateWidget,
    findWidgetsForTopic
}