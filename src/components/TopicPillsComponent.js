import React from "react";
import { Link } from "react-router-dom"

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: 'New Topic',
        editingTopic: {},
        selected: {}
    }

    componentDidMount() {
        if (this.props.params.lessonId !== undefined) {
            this.props.findTopicsForLesson(this.props.params.lessonId)
        }
        if (this.props.selected !== undefined) {
            this.setState({
                selected: this.props.selected
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId)
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
            <div>
                <h4>Topics</h4>
                <ul className="list-group">
                    {
                        this.props.topics.map(topic =>
                            <li key={topic._id}
                                className={`list-group-item nowrap
                                            ${topic._id === this.state.editingTopic._id
                                        || topic._id === this.state.selected._id ?
                                        "active" : ""}`}>
                                {
                                    this.state.editingTopic._id === topic._id &&
                                    <span>
                                        <input
                                            onChange={(e) => {
                                                const newTitle = e.target.value
                                                this.setState(prevState => ({
                                                    editingTopic: {
                                                        ...prevState.editingTopic,
                                                        title: newTitle
                                                    }
                                                }))
                                            }}
                                            value={this.state.editingTopic.title} />
                                        <button className="btn btn-sm btn-dark float-right"
                                            onClick={() => this.props.deleteTopic(topic._id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                        <button className="btn btn-sm btn-dark mr-2 float-right"
                                            onClick={() => {
                                                this.props.updateTopic(this.state.editingTopic._id, this.state.editingTopic)
                                                this.setState({ editingTopic: {} })
                                            }}>
                                            <i className="fa fa-check"></i>
                                        </button>
                                    </span>
                                }
                                {
                                    this.state.editingTopic._id !== topic._id &&
                                    <span>
                                        <Link className="text-dark mt-1"
                                            to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${this.props.params.lessonId}/topics/${topic._id}`}
                                            onClick={() => this.props.findTopic(topic._id)}>
                                            {topic.title}
                                        </Link>
                                        <button className="btn btn-sm btn-dark float-right"
                                            onClick={() => this.setState({ editingTopic: topic })}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                    </span>
                                }
                            </li>
                        )}
                </ul>

                <div className="input-group">
                    <input
                        onChange={(event) =>
                            this.setState({
                                newTopicTitle: event.target.value
                            })}
                        className="form-control"
                        value={this.state.newTopicTitle} />
                    <div className="input-group-append">
                        <button className="btn btn-dark"
                            onClick={() => this.props.createTopic(
                                this.props.params.lessonId,
                                {
                                    title: this.state.newTopicTitle
                                })}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopicPillsComponent