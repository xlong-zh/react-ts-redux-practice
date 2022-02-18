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

const ExampleFun: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  const changeAdminName = () => {
    props.changeAdminName();
  };
  const changeUserName = () => {
    props.changeUserName();
  };
  return (
    <div>
      {props.admin?.name}
      <br />
      {props.user?.name}
      <br />
      <button onClick={changeAdminName}>change adminname</button>
      <br />
      <button onClick={changeUserName}>change username</button>
    </div>
  );
};
const mapStateToProps = (state: rootState) => {
  return { ...state.admin, ...state.user };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeAdminName: () => {
    dispatch({
      type: IAdminActionType.CHANGE,
      payload: { admin: { name: 'change admin22222222' + new Date().getTime() } },
    });
  },
  changeUserName: () => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: { user: { name: 'change user22222222222' + new Date().toLocaleString() } },
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ExampleFun);
