import React from 'react';
import styles from './styles.css'

class RightDiv extends React.Component {

    render() {
        const styleNames = `pull-right cell`;
        return [
            <div key='contentTitle' className={`${styles.cell} ${styles.pright}`}><br/>{this.props.content[0].title}</div>,
            <div key='contentDescription' className={`${styles.cell} ${styles.pright}`}><br/>{this.props.content[0].description}</div>
        ]
    }
}

export default RightDiv;