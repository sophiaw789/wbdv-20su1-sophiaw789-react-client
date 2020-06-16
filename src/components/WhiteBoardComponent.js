import React from 'react'
// Do not need ReactDOM (only needs to be in the index.js page)
import CourseManagerContainer from "../containers/CourseManagerContainer";
import CourseEditorComponent from "./CourseEditorComponent";
// to implement navigation
import { BrowserRouter, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent"
import LoginComponent from "./LoginComponent"
import RegisterComponent from "./RegisterComponent"
import ProfileComponent from "./ProfileComponent"

// es6 
class WhiteBoardComponent extends React.Component {

    // must override this function from React.Component
    render() {
        return (
            //Just these two separate things, would fail to compile
            // Fix -> Put in div
            <BrowserRouter>
                <div>
                    <h1>WhiteBoard</h1>

                    <Route
                        path="/login"
                        exact={true}
                        component={LoginComponent} />

                    <Route
                        path="/register"
                        exact={true}
                        component={RegisterComponent} />

                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent} />

                    <Route
                        path='/:layout/courses'
                        exact={true}
                        component={CourseManagerContainer} />

                    <Route
                        path='/editor/:courseId'
                        exact={true}
                        component={CourseEditorComponent} />

                    <Route
                        path='/editor/:courseId/modules/:moduleId'
                        exact={true}
                        component={CourseEditorComponent} />

                    <Route
                        path='/editor/:courseId/modules/:moduleId/lessons/:lessonId'
                        exact={true}
                        component={CourseEditorComponent} />

                    <Route
                        path='/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId'
                        exact={true}
                        component={CourseEditorComponent} />

                    <Route
                        path='/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId'
                        exact={true}
                        component={CourseEditorComponent} />

                    <Route
                        path='/profile'
                        exact={true}
                        component={ProfileComponent} />

                </div>
            </BrowserRouter>
        )
    }
}

// Must export class in order to import it elsewhere
// using default namespace
// If exporting multiple things, we would have to name each one
// default doesn't require naming
export default WhiteBoardComponent