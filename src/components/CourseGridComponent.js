import React from 'react';
import CourseCardComponent from '../components/CourseCardComponent'
import '../styles/CourseGridStyle.css'

export default class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Recent Courses</th>
                            <th className="d-none d-sm-table-cell">Owner</th>
                            <th>
                                <button className="btn btn-dark mr-2">
                                    <i className="fa-2x fa fa-sort-alpha-asc"></i>
                                </button>
                                <button className="btn btn-dark"
                                    onClick={() =>
                                        this.props.setLayout('table')}>
                                    <i className="fa-2x fa fa-table"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div className="card-deck">
                    {
                        this.props.courses.map(course =>
                            <CourseCardComponent
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course} />
                        )}
                </div>
                <button className="wbdv-bottom-right btn btn-danger btn-lg">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    }
}