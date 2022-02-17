import React from 'react';
import { connect } from 'react-redux';
import { rootState } from './store';
import { IAdmin } from './store/reducers/admin';
import { IUser } from './store/reducers/user';

interface IProps {
  admin?: IAdmin;
  user?: IUser;
}

class Example extends React.Component<IProps> {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.admin?.name}
        <br />
        {this.props.user?.name}
      </div>
    );
  }
}

const mapStateToProps = (state: rootState) => {
  return { ...state.admin, ...state.user };
};

export default connect(mapStateToProps)(Example);
