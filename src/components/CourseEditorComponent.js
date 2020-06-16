import React from "react";
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import { Link } from "react-router-dom";
import "../styles/CourseEditorStyle.css";
import TopicPillsContainer from "../containers/TopicPillsContainer";
import WidgetListContainer from "../containers/WidgetListContainer";
import CourseService from "../services/CourseService";

// used to have no state and no event handlers
// aka a stateless component
// react is considered a library or framework
class CourseEditorComponent extends React.Component {
    state = {
        course: {}
    }

    componentDidMount() {
        CourseService.findCourseById(this.props.match.params.courseId)
            .then(course => this.setState({
                course: course
            }))
    }

    render() {
        return (
            // require to implement each one as a separate component
            <div>
                <Link className="btn btn-dark mb-sm-2" to="/table/courses">
                    <i className="fa fa-times"></i>
                </Link>
                <h2 className="ml-2">{this.state.course.title}</h2>
                <div className="row mt-2">
                    <div className="col-4">
                        <ModuleListContainer {...this.props.match} />
                        <LessonTabsContainer {...this.props.match} />
                    </div>
                    <div className="col-8">
                        <TopicPillsContainer {...this.props.match} />
                        <WidgetListContainer {...this.props.match} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorComponent