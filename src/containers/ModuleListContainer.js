import { connect } from "react-redux";
import ModuleListComponent from '../components/ModuleListComponent'
import ModuleService from "../services/ModuleService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        modules: state.moduleReducer.modules,
        selected: state.moduleReducer.selected,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) => {
            ModuleService.findModulesForCourse(courseId)
                .then(courseModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: courseModules
                }))
        },
        findModule: (moduleId) => {
            ModuleService.findModule(moduleId)
                .then(actualModule => dispatch({
                    type: 'FIND_MODULE',
                    module: actualModule
                }))
        },
        updateModule: (moduleId, newModule) => {
            ModuleService.updateModule(moduleId, newModule)
                .then(status => dispatch({
                    type: 'UPDATE_MODULE',
                    updatedModule: newModule
                }))
        },
        createModule: (courseId, newModule) => {
            ModuleService.createModule(courseId, newModule)
                .then(actualNewModule => dispatch({
                    type: "CREATE_MODULE",
                    newModule: actualNewModule
                }))
        },
        deleteModule: (moduleId) => {
            //dispatch is the event argument in moduleReducer
            ModuleService.deleteModule(moduleId)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleId: moduleId
                }))
        }
    }
}

const ModuleListContainer = connect
    (stateToPropertyMapper, dispatchToPropertyMapper)
    (ModuleListComponent)

export default ModuleListContainer
