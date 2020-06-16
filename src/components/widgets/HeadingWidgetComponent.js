import React from "react";

export default class HeadingWidgetComponent extends React.Component {
    state = {
        newWidgetText: this.props.widget.text,
        previewMode: false,
        newWidgetName: this.props.widget.name,
        editWidget: this.props.widget,
        heading: `h${this.props.widget.size}`
    }

    render() {
        return (
            <div>
                {
                    !this.state.previewMode &&
                    <span>
                        <h5>Heading Widget</h5>
                        <button className="btn btn-sm mb-2 ml-2 btn-dark float-right"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-times"></i>
                        </button>
                        <select
                            className="float-right mt-1 ml-2"
                            ref={node => this.input = node}
                            defaultValue={this.state.editWidget.type}
                            onChange={(e) => {
                                this.props.changeType(this.props.widget.id, this.input.value)
                            }}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                        </select>
                        {
                            this.state.editWidget.widgetOrder < this.props.size
                            && this.props.widget.widgetOrder < this.props.size &&
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
                                    this.props.positionDown(this.props.widget.id, this.state.editWidget)
                                }}>
                                <i className="fa fa-arrow-down"></i>
                            </button>
                        }
                        {
                            this.state.editWidget.widgetOrder > 1
                            && this.props.widget.widgetOrder > 1 &&
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
                                    this.props.positionUp(this.props.widget.id, this.state.editWidget)
                                }}>
                                <i className="fa fa-arrow-up"></i>
                            </button>
                        }
                        <input
                            className="form-control"
                            placeholder="Heading text"
                            onChange={(e) => {
                                const newText = e.target.value
                                this.setState(prevState => ({
                                    editWidget: {
                                        ...prevState.editWidget,
                                        text: newText
                                    }
                                }))
                            }}
                            value={this.state.editWidget.text} />
                        <select
                            ref={node => this.select = node}
                            defaultValue={'' + this.state.editWidget.size}
                            onChange={(e) => {
                                this.setState(prevState => ({
                                    editWidget: {
                                        ...prevState.editWidget,
                                        size: parseInt(this.select.value)
                                    }
                                }))
                                {
                                    this.setState(prevState => ({
                                        heading: `h${this.select.value}`
                                    }))
                                }
                            }}
                            className="form-control">
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                            <option value="4">Heading 4</option>
                            <option value="5">Heading 5</option>
                            <option value="6">Heading 6</option>
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
                <this.state.heading>
                    {this.state.editWidget.text}
                </this.state.heading>

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
            </div >
        )
    }
}