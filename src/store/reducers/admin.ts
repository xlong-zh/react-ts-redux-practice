export interface IAdmin {
  id: number;
  name: string;
}
export interface IAdminState {
  admin: IAdmin;
}
const initAdminState: IAdminState = {
  admin: {
    id: 0,
    name: 'adminname',
  },
};

export enum IAdminActionType {
  INIT,
  CHANGE,
}
const admin = (state: IAdminState = initAdminState, action: { type: IAdminActionType; payload: IAdminState }) => {
  switch (action.type) {
    case IAdminActionType.INIT:
      return state;
    case IAdminActionType.CHANGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default admin;
