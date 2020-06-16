import React from 'react';
import CourseService from "../services/CourseService"
import { Link } from "react-router-dom";
import '../styles/CourseCardStyle.css'
import CourseEditorComponent from "./CourseEditorComponent"

export default class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        // copy of parent course
        course: this.props.course
    }

    setEditing = (editing) =>
        this.setState({ editing: editing })

    ok = () =>
        CourseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            // overriding
            course: {
                ...prevState.course,
                title: newTitle
            }
        }))

    render() {
        return (
            <div className="card mb-4">
                <img className="card-img-top"
                    src="https://picsum.photos/300/200"
                    alt="..." />
                <div className="card-body">
                    {
                        !this.state.editing &&
                        // new string concatenation syntax
                        //<Link to={`/editor/${this.state.course._id}`}>
                        <Link
                            className="card-title d-inline-block"
                            to={`/editor/${this.state.course._id}`}
                            render={(match) => <CourseEditorComponent {...match} />}>
                            {this.state.course.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control card-title d-in-line-block"
                            onChange={(event) => this.updateCourseTitle(event.target.value)}
                            value={this.state.course.title} />
                    }
                    <p className="card-text">Modified {this.state.course.modified}</p>
                    {
                        !this.state.editing &&
                        <button className="btn btn-primary btn-sm float-right"
                            onClick={() => this.setEditing(true)}>
                            <i className="fa-2x fa fa-pencil"></i>
                        </button>
                    }
                    {
                        this.state.editing &&
                        <span>
                            <button className="btn float-right btn-sm btn-danger"
                                // this.state.course does not work because it's a copy
                                // this.props.course is a reference
                                onClick={() => this.props.deleteCourse(this.props.course)}>
                                <i className="fa-2x fa fa-trash"></i>
                            </button>
                            <button className="btn float-right btn-primary btn-sm mr-2"
                                onClick={this.ok}>
                                <i className="fa-2x fa fa-check"></i>
                            </button>
                        </span>
                    }
                </div>
            </div>
        )
    }
}
