import { connect } from "react-redux";
import LessonTabsComponent from '../components/LessonTabsComponent'
import LessonService from "../services/LessonService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        lessons: state.lessonReducer.lessons,
        selected: state.lessonReducer.selected,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, newLesson) => {
        LessonService.createLesson(moduleId, newLesson)
            .then(actualLesson => dispatch({
                type: 'CREATE_LESSON',
                newLesson: actualLesson
            }))
    },
    findLessonsForModule: (moduleId) => {
        LessonService.findLessonsForModule(moduleId)
            .then(actualLessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: actualLessons
            }))
    },
    findLesson: (lessonId) => {
        LessonService.findLesson(lessonId)
            .then(actualLesson => dispatch({
                type: 'FIND_LESSON',
                lesson: actualLesson
            }))
    },
    deleteLesson: (lessonId) => {
        LessonService.deleteLesson(lessonId)
            .then(status =>
                dispatch({
                    type: "DELETE_LESSON",
                    lessonId
                }))
    },
    updateLesson: (lessonId, newLesson) => {
        LessonService.updateLesson(lessonId, newLesson)
            .then(status =>
                dispatch({
                    type: "UPDATE_LESSON",
                    updatedLesson: newLesson
                }))
    }
})

const LessonTabsContainer = connect
    (stateToPropertyMapper, dispatchToPropertyMapper)
    (LessonTabsComponent)

export default LessonTabsContainer
