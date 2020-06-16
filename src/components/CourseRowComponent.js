import React from 'react';
import { Link } from "react-router-dom";
import CourseService from "../services/CourseService"
import CourseEditorComponent from "./CourseEditorComponent"

// add okay button 
// edit button will make course value fields as input fields
// clicking okay will put it back to on display
// rows are independent of each other
// when that's true, best to use a parent component
// that deals with multiple rows
// edit appears when not editing
// okay appears when editing
// title edit input field doesn't work like this because the Container needs to change the state of the row
// CourseRow is not a container because it doesn't have any children and it inherits from parents
export default class CourseRowComponent extends React.Component {
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
            <tr className={this.state.editing ? 'table-primary' : ''}>
                <td>
                    {
                        !this.state.editing &&
                        // new string concatenation syntax
                        //<Link to={`/editor/${this.state.course._id}`}>
                        <Link to={`/editor/${this.state.course._id}`}
                            render={(match) => <CourseEditorComponent {...match}/>}>
                            {this.state.course.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => this.updateCourseTitle(event.target.value)}
                            value={this.state.course.title} />
                    }
                </td>
                <td className="d-none d-sm-table-cell">{this.state.course.owner}</td>
                <td className="d-none d-md-table-cell">{this.state.course.modified}</td>
                <td>
                    {
                        !this.state.editing &&
                        <button className="btn btn-primary btn-sm"
                            onClick={() => this.setEditing(true)}>
                            <i className="fa-2x fa fa-pencil"></i>
                        </button>
                    }
                    {
                        this.state.editing &&
                        <span>
                            <button className="btn btn-primary btn-sm mr-2"
                                onClick={this.ok}>
                                <i className="fa-2x fa fa-check"></i>
                                </button>
                            <button className="btn btn-danger btn-sm"
                                // this.state.course does not work because it's a copy
                                // this.props.course is a reference
                                onClick={() => this.props.deleteCourse(this.props.course)}>
                                <i className="fa-2x fa fa-trash"></i>
                            </button>
                        </span>
                    }
                </td>
            </tr>
        )
    }
}