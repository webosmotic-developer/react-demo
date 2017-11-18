import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

export default class FriendListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEditMode: false,
      name: props.name
    };
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
  };

  setEditMode = (val) => {
    this.setState({isEditMode: val});
  };

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
        this.setEditMode(false);
        this.props.editFriend(this.props.id, name);
        this.setState({name});
    }
  }

  render () {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          { this.state.isEditMode &&
            <div>
                <input type="text" defaultValue={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={this.handleSubmit.bind(this)}/>
            </div>
          }
          { !this.state.isEditMode &&
            <div><span>{this.props.name}</span></div>
          }
        </div>
        <div className={styles.friendActions}>
          { this.state.isEditMode &&
            <button className={`btn btn-default ${styles.btnAction}`}
                    onClick={() => {this.setEditMode(false);this.props.editFriend(this.props.id, this.state.name)}}>
              <i className="fa fa-check"/>
            </button>
          }
          { !this.state.isEditMode &&
            <button className={`btn btn-default ${styles.btnAction}`}
                    onClick={() => this.setEditMode(true)}>
              <i className="fa fa-pencil"/>
            </button>
          }
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
