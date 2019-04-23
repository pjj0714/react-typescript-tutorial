import * as React from 'react';
interface Props {
  name: string;
  job: string;
}
const Profile: React.SFC<Props> = ({ name, job }) => {
  return (
    <div>
      <h1>Profile</h1>
      <h2>이름 : {name}</h2>
      <h2>직업 : {job}</h2>
    </div>
  );
};
export default Profile;
