import React from 'react';
import CourseRowComponent from '../components/CourseRowComponent'

export default class CourseTableComponent extends React.Component {
    render() {
        // props is attributes
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className="d-none d-sm-table-cell">Owner</th>
                            <th className="d-none d-md-table-cell">Last Modified</th>
                            <th>
                                <button className="btn btn-dark mr-2 btn-sm">
                                    <i className="fa-2x fa fa-sort-alpha-asc"></i>
                                </button>
                                <button className="btn btn-dark btn-sm"
                                    onClick={() =>
                                        this.props.setLayout('grid')}>
                                    <i className="fa-2x fa fa-th"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map(course =>
                                <CourseRowComponent
                                    deleteCourse={this.props.deleteCourse}
                                    key={course._id}
                                    course={course} />
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}