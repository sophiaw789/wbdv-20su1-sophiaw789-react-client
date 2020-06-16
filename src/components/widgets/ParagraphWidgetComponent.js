import React from "react";

export default class ParagraphWidgetComponent extends React.Component {
    state = {
        newWidgetText: this.props.widget.text,
        previewMode: false,
        newWidgetName: this.props.widget.name,
        editWidget: this.props.widget,
    }

    render() {
        return (
            <div>
                {
                    !this.state.previewMode &&
                    <span>
                        <h5>Paragraph Widget</h5>
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
                            placeholder="Paragraph text"
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
                <p>
                    {this.state.editWidget.text}
                </p>

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