import React from 'react';
import CourseTableComponent from '../components/CourseTableComponent'
import CourseGridComponent from '../components/CourseGridComponent';
import CourseService from '../services/CourseService';

// parent component that handles event handlers and maintains the state for child components
// is called a Container
class CourseManagerContainer extends React.Component {
    // not a variable that is manipulated directly
    state = {
        layout: this.props.match.params.layout,
        // once we know it works, make courses empty
        // to prevent flickering on the webpage
        courses: [],
        //{ _id: '123', title: 'cs4550', owner: 'me', modified: '1/1/2020' },

        //Ties the input field to this variable
        // Cannot update it as is
        // Need to dynamically update it
        newCourseTitle: ""

        // First declare state variable
        // onChange to update the state variable 
        // with whatever is in the input field
    }

    componentDidMount() {
        // asychronous function
        CourseService.findAllCourses()
            .then(actualArrayOfCourses =>
                this.setState({
                    courses: actualArrayOfCourses
                }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    }

    // identical to 
    // function setLayout() {}
    // new and improved syntax
    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    }

    deleteCourse = (courseDelete) =>
        CourseService.deleteCourse(courseDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState
                    .courses.filter(course => course !== courseDelete)
            })))

    addCourse = (title) =>
        // debugger
        CourseService.createCourse({
            //_id: (new Date()).getMilliseconds() + '',
            title: title,
            owner: "Me",
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                // this will determine the new state
                this.setState((prevState) => {
                    return {
                        // push doesn't return the array but instead, the number of elements
                        // old syntax
                        //const newCourses = prevState.courses.push(newCourse)
                        // we want the old courses and append the new courses
                        // new spreader syntax
                        courses: [
                            ...prevState.courses,
                            theActualNewCourse
                        ]
                    }
                },
                    this.setState({
                        newCourseTitle: ""
                    })))

    // must override this function
    render() {
        // event.target is a low level DOM element
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="d-flex flex-grow-1">
                        <button className="navbar-toggler order-0 mr-2"
                            type="button" data-toggle="collapse"
                            data-target="#navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <label className="nowrap navbar-brand d-none d-md-block mt-sm-1">
                            Course Manager
                        </label>
                        <div className="input-group mt-2">
                            <input
                                onChange={(event) => this.setState({
                                    newCourseTitle: event.target.value
                                })}
                                value={this.state.newCourseTitle}
                                className="form-control"
                                placeholder="Course Title" />
                            <div className="input-group-append">
                                <button className="btn btn-primary form-control"
                                    onClick={() => this.addCourse(this.state.newCourseTitle)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {
                    this.state.layout === 'table' &&
                    <div>
                        <CourseTableComponent
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            layout={this.state.layout}
                            setLayout={this.setLayout} 
                            />
                    </div>
                }
                {
                    this.state.layout === 'grid' &&
                    <div>
                        <CourseGridComponent
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            layout={this.state.layout}
                            setLayout={this.setLayout} />
                    </div>
                }
            </div>
        )
    }
}

// Can also export at the top
export default CourseManagerContainer