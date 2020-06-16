import React from "react";
import { Link } from "react-router-dom"
//import { connect } from "react-redux";

// it originally was a stateless component
class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'New Module',
        editingModule: {},
        selected: {}
    }

    componentDidMount() {
        this.props.findModulesForCourse(this.props.params.courseId)
        if (this.props.selected !== undefined) {
            this.setState({
                selected: this.props.selected
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.selected !== this.props.selected) 
                && this.props.selected !== undefined) {
            this.setState({
                selected: this.props.selected
            })
        }
    }

    render() {
        return (
            <div className="editor">
                <div>
                    <h4>Modules</h4>
                    <ul className="list-group">
                        {
                            this.props.modules.map(module =>
                                <li key={module._id}
                                    className={`list-group-item nowrap 
                                                ${module._id === this.state.selected._id
                                            || module._id === this.state.editingModule._id ?
                                            "active" : ""}`}>
                                    {// this is an if expression
                                        this.state.editingModule._id === module._id &&
                                        <span>
                                            <input
                                                onChange={(e) => {
                                                    const newTitle = e.target.value
                                                    this.setState(prevState => ({
                                                        editingModule: {
                                                            ...prevState.editingModule,
                                                            title: newTitle
                                                        }
                                                    }))
                                                }}
                                                value={this.state.editingModule.title} />
                                            <button className="btn btn-sm btn-dark float-right"
                                                // d-none d-sm-block
                                                // onClick={deleteModule(module._id)} is different from
                                                // onClick={() => deleteModule(module._id)}
                                                // the latter does not immediately invoke the function
                                                // unlike the former
                                                onClick={() => this.props.deleteModule(module._id)}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                            <button className="btn btn-sm btn-dark mr-2 float-right"
                                                onClick={() => {
                                                    this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                                                    this.setState({ editingModule: {} })
                                                }}>
                                                <i className="fa fa-check"></i>
                                            </button>
                                        </span>
                                    }
                                    {
                                        this.state.editingModule._id !== module._id &&
                                        <span>
                                            <Link className="text-dark"
                                                to={`/editor/${this.props.params.courseId}/modules/${module._id}`}
                                                onClick={() => this.props.findModule(module._id)}>
                                                {module.title}
                                            </Link>
                                            <button className="btn btn-sm btn-dark float-right"
                                                onClick={() => this.setState({ editingModule: module })}>
                                                <i className="fa fa-pencil"></i>
                                            </button>
                                        </span>
                                    }
                                </li>
                            )}
                    </ul>
                </div>
                <div className="input-group">
                    <input
                        onChange={(event) =>
                            this.setState({
                                newModuleTitle: event.target.value
                            })}
                        className="form-control border border-right-0"
                        value={this.state.newModuleTitle} />
                    <div className="input-group-append">
                        <button className="btn btn-dark"
                            onClick={() => this.props.createModule(
                                this.props.params.courseId,
                                {
                                    title: this.state.newModuleTitle
                                })}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

/*
    Could have the ModuleListContainer functions here
    But more popular to separate the two
*/

export default ModuleListComponent
/* Can export multiple things but only one default
export const wer = 1
export const ert = 2
*/