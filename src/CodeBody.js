import React from 'react';
import TreeElement from './TreeElement';
import './styles.css'

class CodeBody extends React.Component {
    render() {
        return [
            <pre key="elements" className="codeBody">Content:</pre>,
            this.props.content.map((element) => {
                return <TreeElement
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    descriptionCallBack={this.props.descriptionCallBack}
                    description={element.description}
                    children={element.children}
                    indent={0}
                />
            })
        ]
    }
}

export default CodeBody;