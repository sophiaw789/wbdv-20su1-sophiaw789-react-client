const initialState = {
    topics: [],
    selected: {}
}

const topicReducer = (state = initialState, event) => {
    switch (event.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === event.updatedTopic._id ?
                        event.updatedTopic : topic
                )
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: event.topics
            }
        case "FIND_TOPIC":
            return {
                ...state,
                selected: event.topic
            }
        case "CREATE_TOPIC":
            return {
                topics: [
                    ...state.topics,
                    event.newTopic
                ]
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => topic._id !== event.topicId)
            }
        default:
            return state;
    }
}

export default topicReducer