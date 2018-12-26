import React from 'react';
import Title from './Title';
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'currentNode': {
                'description': '',
                'title': ''
            },
        };
        this.title = "Tree Renderer";
        this.loadingElements = props.data;
        this.elements =
            [
                {
                    'id': '1.0',
                    'title': '',
                    'description': ''
                }
            ];
        this.descriptionCallBack = this.descriptionCallBack.bind(this);
    }

    descriptionCallBack(data) {
        this.setState({
            'currentNode': data
        });
    }

    render() {
        this.elements = this.loadingElements;
        return [
            <Title key='title'/>,
            <LeftDiv key='leftDiv' descriptionCallBack={this.descriptionCallBack} title={this.title} elements={this.elements}/>,
            <RightDiv key='rightDiv' content={[this.state.currentNode]}/>
        ]
    }
}

export default Tree;
