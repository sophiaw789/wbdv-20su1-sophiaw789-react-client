import { connect } from "react-redux";
import TopicPillsComponent from '../components/TopicPillsComponent'
import TopicService from "../services/TopicService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        topics: state.topicReducer.topics,
        selected: state.topicReducer.selected,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            TopicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch({
                    type: 'FIND_TOPICS_FOR_LESSON',
                    topics: actualTopics
                }))
        },
        findTopic: (topicId) => {
            TopicService.findTopic(topicId)
                .then(actualTopic => dispatch({
                    type: 'FIND_TOPIC',
                    topic: actualTopic
                }))
        },
        updateTopic: (topicId, newTopic) => {
            TopicService.updateTopic(topicId, newTopic)
                .then(status => dispatch({
                    type: 'UPDATE_TOPIC',
                    updatedTopic: newTopic
                }))
        },
        createTopic: (lessonId, newTopic) => {
            TopicService.createTopic(lessonId, newTopic)
                .then(actualNewTopic => dispatch({
                    type: "CREATE_TOPIC",
                    newTopic: actualNewTopic
                }))
        },
        deleteTopic: (topicId) => {
            //dispatch is the event argument in TopicReducer
            TopicService.deleteTopic(topicId)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicId: topicId
                }))
        }
    }
}

const TopicPillsContainer = connect
    (stateToPropertyMapper, dispatchToPropertyMapper)
    (TopicPillsComponent)

export default TopicPillsContainer
