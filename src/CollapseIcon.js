import React from 'react';
import styles from './styles.css';

class CollapseIcon extends React.Component {

    render() {
        let icon = '[]';
        if(this.props.hasChildren){
            icon = '[+]';
            if (this.props.open) {
                icon = '[-]'
            }
        }
        return <i className={styles.collapseWidget} onClick={this.props.collapse}>{icon}</i>;
    }
}

export default CollapseIcon;