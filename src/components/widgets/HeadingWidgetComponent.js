import React from "react";

export default class HeadingWidgetComponent extends React.Component {
    state = {
        newWidgetText: this.props.widget.text,
        previewMode: false,
        newWidgetName: this.props.widget.name,
        heading: `h${this.props.size}`,
        editWidget: this.props.widget
    }

    /*
    componentDidMount() {
        this.props.findWidget(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidget(this.props.topicId)
        }
    }
*/
    render() {
        return (
            <div>
                {
                    !this.state.previewMode &&
                    <span>
                        <h3>Heading Widget</h3>
                        <button className="btn btn-sm btn-dark float-right"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-times"></i>
                        </button>
                        <select ref={node => this.select = node}
                                value={this.props.widget.type}
                                onChange={e => {
                                    this.props.changeType(this.props.widget.id, this.select.value)
                                }}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                        </select>
                        <button className="btn btn-sm btn-dark float-right"
                            onClick={() => this.props.positionDown(this.props.widget.id)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <button className="btn btn-sm btn-dark float-right"
                            onClick={() => this.props.positionUp(this.props.widget.id)}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <input
                            className="form-control"
                            placeholder="Heading text"
                            onChange={(e) => {
                                const newText = e.target.value
                                this.setState({
                                    newWidgetText: newText
                                })
                            }}
                            value={this.props.widget.text} />
                        <select ref={node => this.select = node}
                            value={this.props.widget.type}
                            onChange={e => {
                                this.props.changeHeading(this.props.widget.id, this.select.value)
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
                                this.setState({
                                    newWidgetName: newName
                                })
                            }}
                            value={this.props.widget.name} />
                    </span>
                }
                <h1>
                    {this.props.widget.text}
                </h1>

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