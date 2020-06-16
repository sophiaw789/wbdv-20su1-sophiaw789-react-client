const initialState = {
    lessons: [],
    selected: {}
}

const lessonReducer = (state = initialState, event) => {
    switch (event.type) {
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === event.updatedLesson._id ?
                        event.updatedLesson : lesson
                )
            }
        case "FIND_LESSON":
            return {
                ...state,
                selected: event.lesson
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== event.lessonId)
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: event.lessons
            }
        case "CREATE_LESSON":
            return {
                lessons: [
                    ...state.lessons, 
                    event.newLesson
                ]
            }
        default:
            return state
    }
}

export default lessonReducer