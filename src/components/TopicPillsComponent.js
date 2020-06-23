import React from "react";
import { Link } from "react-router-dom"

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: 'New Topic',
        newTopicDescription: 'New Description',
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
                            <li key={topic.id}
                                className={`list-group-item nowrap
                                            ${topic.id === this.state.editingTopic.id
                                        || topic.id === this.state.selected.id ?
                                        "active" : ""}`}>
                                {
                                    this.state.editingTopic.id === topic.id &&
                                    <div className="input-group">
                                        <input
                                            className="form-control"
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
                                        <input
                                            className="form-control"
                                            onChange={(e) => {
                                                const newDescription = e.target.value
                                                this.setState(prevState => ({
                                                    editingTopic: {
                                                        ...prevState.editingTopic,
                                                        description: newDescription
                                                    }
                                                }))
                                            }}
                                            value={this.state.editingTopic.description} />
                                        <div className="input-group-append">
                                            <button className="btn btn-sm btn-dark mr-2 float-right"
                                                onClick={() => {
                                                    this.props.updateTopic(this.state.editingTopic.id, this.state.editingTopic)
                                                    this.setState({ editingTopic: {} })
                                                }}>
                                                <i className="fa fa-check"></i>
                                            </button>
                                            <button className="btn btn-sm btn-dark float-right"
                                                onClick={() => this.props.deleteTopic(topic.id)}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    this.state.editingTopic.id !== topic.id &&
                                    <div>
                                        <span>
                                            <Link className="text-dark mt-1"
                                                to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${this.props.params.lessonId}/topics/${topic.id}`}
                                                onClick={() => this.props.findTopic(topic.id)}>
                                                {topic.title}
                                            </Link>
                                            <button className="btn btn-sm btn-dark float-right"
                                                onClick={() => this.setState({ editingTopic: topic })}>
                                                <i className="fa fa-pencil"></i>
                                            </button>
                                        </span>
                                        <p className="d-none d-md-block text-dark">{topic.description}</p>
                                    </div>
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
                    <input
                        onChange={(event) =>
                            this.setState({
                                newTopicDescription: event.target.value
                            })}
                        className="form-control"
                        value={this.state.newTopicDescription} />
                    <div className="input-group-append">
                        <button className="btn btn-dark"
                            onClick={() => this.props.createTopic(
                                this.props.params.lessonId,
                                {
                                    title: this.state.newTopicTitle,
                                    description: this.state.newTopicDescription
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