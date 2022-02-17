export interface IAdmin {
  id: number;
  name: string;
}
interface IState {
  admin: IAdmin;
}
const initAdminState: IState = {
  admin: {
    id: 0,
    name: 'adminname',
  },
};
const admin = (state: IState = initAdminState, action: any) => {
  return state;
};
export default admin;
