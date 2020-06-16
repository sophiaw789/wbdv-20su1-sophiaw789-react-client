import React from "react";

export default class ParagraphWidgetComponent extends React.Component {
    state = {
        newWidgetText: this.props.widget.text,
        previewMode: false,
        newWidgetName: this.props.widget.name
    }

    componentDidMount() {
        this.props.findWidgetById(this.props.params.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetById(this.props.params.topicId)
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.previewMode &&
                    <span>
                        <h3>Paragraph Widget</h3>
                        <button className="btn btn-sm btn-dark float-right"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-times"></i>
                        </button>
                        <select>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                        </select>
                        <button className="btn btn-sm btn-dark float-right"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-down"></i>
                        </button>
                        <button className="btn btn-sm btn-dark float-right"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-up"></i>
                        </button>
                        <input
                            className="textarea vresize"
                            placeholder="Paragraph text"
                            onChange={(e) => {
                                const newText = e.target.value
                                this.setState({
                                    newWidgetText: newText
                                })
                            }}
                            value={this.props.widget.text} />
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
                <p>
                    {this.props.widget.text}
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
                        this.props.updateWidget(this.props.widget.id, this.props.widget)
                    }}>
                    Save
                </button>
            </div>
        )
    }
}