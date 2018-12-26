import React from 'react';
import CollapseIcon from './CollapseIcon';
import styles from './styles.css'

class TreeElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'displayChild': false
        };
        this.collapse = this.collapse.bind(this);
    }

    collapse() {
        this.props.descriptionCallBack({'description': this.props.description, 'title': this.props.title});
        this.setState({'displayChild': !this.state.displayChild});
    }

    render() {
        let children = [];
        let indentStyle = {marginLeft: this.props.indent};
        if (this.state.displayChild) {
            if (this.props.children !== undefined) {
                children = this.props.children.map((child) => {
                    return <TreeElement
                        key={child.id}
                        id={child.id}
                        descriptionCallBack={this.props.descriptionCallBack}
                        title={child.title}
                        description={child.description}
                        children={child.children}
                        indent={this.props.indent + 20}
                    />
                });
            }
        }

        return [<div className={styles.treeElement} key={this.props.id}
                     style={indentStyle}>{this.props.title} <CollapseIcon
            collapse={this.collapse}
            hasChildren={this.props.children !== undefined}
            open={this.state.displayChild}/></div>,
            children
        ];
    }
}

export default TreeElement;