import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { rootState } from './store';
import { IAdmin, IAdminActionType } from './store/reducers/admin';
import { IUser, IUserActionType } from './store/reducers/user';

interface IProps {
  admin?: IAdmin;
  user?: IUser;
  changeAdminName(): void;
  changeUserName(): void;
}

class Example extends React.Component<IProps> {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  changeAdminName = () => {
    this.props.changeAdminName();
  };
  changeUserName = () => {
    this.props.changeUserName();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.admin?.name}
        <br />
        {this.props.user?.name}
        <br />
        <button onClick={this.changeAdminName}>change adminname</button>
        <br />
        <button onClick={this.changeUserName}>change username</button>
      </div>
    );
  }
}

const mapStateToProps = (state: rootState) => {
  return { ...state.admin, ...state.user };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeAdminName: () => {
    dispatch({
      type: IAdminActionType.CHANGE,
      payload: { admin: { name: 'change admin11111111111111' + new Date().getTime() } },
    });
  },
  changeUserName: () => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: { user: { name: 'change user11111111111111' + new Date().toLocaleString() } },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
