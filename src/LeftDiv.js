import React from 'react';
import CodeBody from "./CodeBody";
import styles from './styles.css'

class LeftDiv extends React.Component {

    render() {
        return <div key="codeBodyParent" className={`${styles.cell} ${styles.pleft}`}>{this.props.title}<CodeBody
            descriptionCallBack={this.props.descriptionCallBack}
            content={this.props.elements}/></div>
    }
}

export default LeftDiv;