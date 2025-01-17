import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import ImageWidgetComponent from "./widgets/ImageWidgetComponent";
import "../styles/HeadingWidgetStyle.css";
import ListWidgetComponent from "./widgets/ListWidgetComponent";

class WidgetListComponent extends React.Component {

    componentDidMount() {
        if (this.props.params.topicId !== undefined) {
            this.props.findWidgetsForTopic(this.props.params.topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetsForTopic(this.props.params.topicId)
        }
    }
/*
    updateWidget = (e, oldWidget) => {
        oldWidget.type = e.target.value;
        // this fetch really should be implemented in a service and then called from the dispatch / property mapper
        fetch(`https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/widgets/${oldWidget.id}`, {
            method: 'PUT',
            body: JSON.stringify(oldWidget),
            headers: {
                'content-type': 'application/json'
            },
            // credentials: "include"
        }).then(response => response.json())
            .then(newWidget => this.props.updateWidget(oldWidget.id, newWidget))
    }
*/
    createWidget = (order) => {
        this.props.createWidget(
            this.props.params.topicId,
            {
                name: '',
                type: 'HEADING',
                text: 'Heading text',
                size: 1,
                widgetOrder: order,
                url: '',
                width: 300,
                height: 300,
                ordering: 'ul'
            })
    }

    render() {
        return (
            <div className="mt-2">
                <h4>Widget List</h4>
                <ul className="list-group">
                    {
                        this.props.widgets.sort((a, b) => a.widgetOrder > b.widgetOrder ? 1 : -1)
                            .map(widget =>
                                <li key={widget.id}
                                    className={`list-group-item nowrap`}>
                                    {
                                        widget.type === 'HEADING' &&
                                        <HeadingWidgetComponent
                                            widget={widget}
                                            widgets={this.props.widgets}
                                            topicId={this.props.params.topicId}
                                            findWidgetById={this.props.findWidgetById}
                                            updateWidget={this.props.updateWidget}
                                            deleteWidget={this.props.deleteWidget}
                                            positionUp={this.props.positionUp}
                                            positionDown={this.props.positionDown}
                                            size={this.props.widgets.length}
                                            changeType={this.props.changeType} />
                                    }
                                    {
                                        widget.type === 'PARAGRAPH' &&
                                        <ParagraphWidgetComponent
                                            widget={widget}
                                            widgets={this.props.widgets}
                                            topicId={this.props.params.topicId}
                                            findWidgetById={this.props.findWidgetById}
                                            updateWidget={this.props.updateWidget}
                                            deleteWidget={this.props.deleteWidget}
                                            positionUp={this.props.positionUp}
                                            positionDown={this.props.positionDown}
                                            size={this.props.widgets.length}
                                            changeType={this.props.changeType} />
                                    }
                                    {
                                        widget.type === 'IMAGE' &&
                                        <ImageWidgetComponent
                                            widget={widget}
                                            widgets={this.props.widgets}
                                            topicId={this.props.params.topicId}
                                            findWidgetById={this.props.findWidgetById}
                                            updateWidget={this.props.updateWidget}
                                            deleteWidget={this.props.deleteWidget}
                                            positionUp={this.props.positionUp}
                                            positionDown={this.props.positionDown}
                                            size={this.props.widgets.length}
                                            changeType={this.props.changeType} />
                                    }
                                                                        {
                                        widget.type === 'LIST' &&
                                        <ListWidgetComponent
                                            widget={widget}
                                            widgets={this.props.widgets}
                                            topicId={this.props.params.topicId}
                                            findWidgetById={this.props.findWidgetById}
                                            updateWidget={this.props.updateWidget}
                                            deleteWidget={this.props.deleteWidget}
                                            positionUp={this.props.positionUp}
                                            positionDown={this.props.positionDown}
                                            size={this.props.widgets.length}
                                            changeType={this.props.changeType} />
                                    }
                                    {/*
                                    <div>
                                        <select onChange={(e) => this.updateWidget(e, widget)} value={widget.type}>
                                            <option value="HEADING">HEADING</option>
                                            <option value="YOUTUBE">YOUTUBE</option>
                                            <option value="PARAGRAPH">PARAGRAPH</option>
                                        </select>
                                    </div>
                                    */}
                                </li>
                            )}
                </ul>
                <button className="btn btn-dark float-right"
                    onClick={() => {
                        if (this.props.widgets === []) {
                            this.createWidget(1)
                        }
                        else {
                            this.createWidget(this.props.widgets.length + 1)
                        }
                    }}>
                    <i className="fa fa-plus"></i>
                </button>

                {/*<div className="mt-2 border border-grey container">
                    <label className="col-form-label mb-sm-2" for="widgetFld">Heading Widget</label>
                    <div>
                        <input id="widgetFld" className="form-control" type="text" placeholder="Heading text" />
                    </div>
                    <div className="mt-sm-4">
                        <select id="widgetFld" className="form-control wbdv-field wbdv-widget">
                            <option value="heading1">Heading 1</option>
                            <option value="heading2">Heading 2</option>
                            <option value="heading3">Heading 3</option>
                        </select>
                    </div>
                    <div className="mt-sm-4">
                        <input id="widgetFld" className="form-control" type="text" placeholder="Widget name" />
                    </div>
                    <label className="col-form-label mt-sm-4 mb-sm-2" for="widgetFld">Preview</label>
                    <h1>Heading</h1>
                </div>

                    <button className="btn btn-dark float-right mt-sm-2">
                        <i className="fa fa-plus"></i>
                    </button>
                            </div>*/}
            </div >
        )
    }
}

export default WidgetListComponent