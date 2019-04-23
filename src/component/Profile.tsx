import * as React from 'react';

interface Props {
  name: string;
  job: string;
}
export default class Profile extends React.Component<Props> {
  render() {
    const { name, job } = this.props;

    return (
      <div>
        <h1>Profile</h1>
        <h2>이름 : {name}</h2>
        <h2>직업 : {job}</h2>
      </div>
    );
  }
}
