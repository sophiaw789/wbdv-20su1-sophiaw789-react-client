import React from "react";
import "../../styles/ListWidgetStyle.css"

export default class ListWidgetComponent extends React.Component {

    state = {
        previewMode: false,
        editWidget: this.props.widget,
        ordering: this.props.widget.ordering + ''
    }

    render() {
        return (
            <div>
                {
                    !this.state.previewMode &&
                    <span>
                        <h5>List Widget</h5>
                        <button className="btn btn-sm mb-2 ml-2 btn-dark float-right"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-times"></i>
                        </button>
                        <select
                            className="float-right mt-1 ml-2"
                            ref={node => this.input = node}
                            defaultValue={this.state.editWidget.type}
                            onChange={(e) => { this.props.changeType(this.props.widget.id, this.input.value) }}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LIST">List</option>
                        </select>
                        {
                            this.props.widget.widgetOrder !== this.props.size &&
                            <button className="btn btn-sm btn-dark ml-2 float-right"
                                onClick={() => {
                                    this.props.widgets.map(widget => {
                                        if (widget.id === this.props.widget.id) {
                                            this.setState(prevState => ({
                                                editWidget: {
                                                    ...prevState.editWidget,
                                                    widgetOrder: prevState.editWidget.widgetOrder + 1
                                                }
                                            })
                                            )
                                        }
                                        if (widget.widgetOrder === this.props.widget.widgetOrder + 1) {
                                            widget.widgetOrder = this.props.widget.widgetOrder
                                        }
                                    })
                                    this.props.positionDown(this.props.widget.id)
                                }}>
                                <i className="fa fa-arrow-down"></i>
                            </button>
                        }
                        {
                            this.props.widget.widgetOrder !== 1 &&
                            <button className="btn btn-sm btn-dark float-right"
                                onClick={() => {
                                    this.props.widgets.map(widget => {
                                        if (widget.id === this.props.widget.id) {
                                            this.setState(prevState => ({
                                                editWidget: {
                                                    ...prevState.editWidget,
                                                    widgetOrder: prevState.editWidget.widgetOrder - 1
                                                }
                                            })
                                            )
                                        }
                                        if (widget.widgetOrder === this.props.widget.widgetOrder - 1) {
                                            widget.widgetOrder = this.props.widget.widgetOrder
                                        }
                                    })
                                    this.props.positionUp(this.props.widget.id)
                                }}>
                                <i className="fa fa-arrow-up"></i>
                            </button>
                        }
                        <textarea
                            className="form-control"
                            placeholder="Enter one list item per line"
                            onChange={(e) => {
                                const newText = e.target.value
                                this.setState(prevState => ({
                                    editWidget: {
                                        ...prevState.editWidget,
                                        text: newText
                                    }
                                }))
                            }}
                            value={this.state.editWidget.text}>
                        </textarea>
                        <select
                            ref={node => this.select = node}
                            defaultValue={this.state.editWidget.ordering}
                            onChange={(e) => {
                                this.setState(prevState => ({
                                    editWidget: {
                                        ...prevState.editWidget,
                                        ordering: this.select.value
                                    }
                                }))
                                {
                                    this.setState(prevState => ({
                                        ordering: '' + this.select.value
                                    }))
                                }
                            }}
                            className="form-control">
                            <option value="ol">Ordered List</option>
                            <option value="ul">Unordered List</option>
                        </select>
                        <input
                            className="form-control"
                            placeholder="Widget name"
                            onChange={(e) => {
                                const newName = e.target.value
                                this.setState(prevState => ({
                                    editWidget: {
                                        ...prevState.editWidget,
                                        name: newName
                                    }
                                }))
                            }}
                            value={this.state.editWidget.name} />
                        <h6 className="mt-2">Preview</h6>
                    </span>
                }
                <this.state.ordering className="p_wrap">
                    {
                        this.state.editWidget.text.split('\n').map(line =>
                            <li>{line}</li>
                        )
                    }
                </this.state.ordering>

                <button className="btn btn-primary float-right btn-sm"
                    onClick={() => {
                        if (this.state.previewMode) {
                            this.setState({
                                previewMode: false
                            })
                        }
                        else {
                            this.setState({
                                previewMode: true
                            })
                        }
                    }}
                    id="previewBtn">
                    {this.state.previewMode ? "On" : "Off"}
                </button>
                <label className="float-right mt-1 ml-2 mr-2" for="previewBtn">
                    Preview
                </label>
                <button className="btn btn-sm btn-dark mr-2 float-right"
                    onClick={() => {
                        this.props.updateWidget(this.props.widget.id, this.state.editWidget)
                    }}>
                    Save
                </button>
            </div>
        )
    }
}