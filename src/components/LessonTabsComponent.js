import React from "react";
import { Link } from "react-router-dom"

// it was a stateless component
// es6 allows you to remove the return and curly brackets
// if nothing else is happening
class LessonTabsComponent extends React.Component {
    state = {
        newLessonTitle: 'New Lesson',
        editingLesson: {},
        selected: {}
    }

    componentDidMount() {
        if (this.props.params.moduleId !== undefined) {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }
        if (this.props.selected !== undefined) {
            this.setState({
                selected: this.props.selected
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonsForModule(this.props.params.moduleId)
            this.setState({
                selected: {}
            })
        }
        if ((prevProps.selected !== this.props.selected)
            && this.props.selected !== undefined) {
            this.setState({
                selected: this.props.selected
            })
        }
    }

    render() {
        return (
            <div className="mt-2">
                <h4>Lessons</h4>
                <ul className="list-group">
                    {
                        this.props.lessons.map(lesson =>
                            <li key={lesson._id}
                                className={`list-group-item nowrap 
                                            ${lesson._id === this.state.editingLesson._id
                                        || lesson._id === this.state.selected._id ?
                                        "active" : ""}`}>
                                {
                                    this.state.editingLesson._id === lesson._id &&
                                    <span>
                                        <input
                                            onChange={(e) => {
                                                const newTitle = e.target.value
                                                this.setState(prevState => ({
                                                    editingLesson: {
                                                        ...prevState.editingLesson,
                                                        title: newTitle
                                                    }
                                                }))
                                            }}
                                            value={this.state.editingLesson.title} />
                                        <button className="btn btn-sm btn-dark float-right"
                                            onClick={() => this.props.deleteLesson(lesson._id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                        <button className="btn btn-sm btn-dark mr-2 float-right"
                                            onClick={() => {
                                                this.props.updateLesson(this.state.editingLesson._id, this.state.editingLesson)
                                                this.setState({ editingLesson: {} })
                                            }}>
                                            <i className="fa fa-check"></i>
                                        </button>
                                    </span>
                                }
                                {
                                    this.state.editingLesson._id !== lesson._id &&
                                    <span>
                                        <Link className="text-dark"
                                            to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${lesson._id}`}
                                            onClick={() => this.props.findLesson(lesson._id)}>
                                            {lesson.title}
                                        </Link>
                                        <button className="btn btn-sm btn-dark float-right"
                                            onClick={() => this.setState({ editingLesson: lesson })}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                    </span>
                                }
                            </li>
                        )
                    }
                </ul>

                <div className="input-group">
                    <input
                        onChange={(event) =>
                            this.setState({
                                newLessonTitle: event.target.value
                            })}
                        className="form-control"
                        value={this.state.newLessonTitle} />
                    <div className="input-group-append">
                        <button className="btn btn-dark"
                            onClick={() => this.props.createLesson(
                                this.props.params.moduleId,
                                {
                                    title: this.state.newLessonTitle
                                })}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LessonTabsComponent
