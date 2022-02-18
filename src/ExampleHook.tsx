import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from './store';
import { IAdmin, IAdminActionType, IAdminState } from './store/reducers/admin';
import { IUser, IUserActionType, IUserState } from './store/reducers/user';

interface IProps {}

const ExampleHook: React.FC<IProps> = (props: IProps) => {
  const { user } = useSelector<rootState, IUserState>((state: rootState) => state.user, shallowEqual);
  const { admin } = useSelector<rootState, IAdminState>((state: rootState) => state.admin, shallowEqual);
  const dispatch = useDispatch();

  const changeAdminName = () => {
    dispatch({
      type: IAdminActionType.CHANGE,
      payload: { admin: { name: 'change admin3333333' + new Date().getTime() } },
    });
  };
  const changeUserName = () => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: { user: { name: 'change user33333333' + new Date().toLocaleString() } },
    });
  };
  return (
    <div>
      {user.name}
      <br />
      {admin.name}
      <br />
      <button onClick={changeAdminName}>change adminname</button>
      <br />
      <button onClick={changeUserName}>change username</button>
    </div>
  );
};
export default ExampleHook;
