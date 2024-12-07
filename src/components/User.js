import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Location: Surat</h3>
      <h4>Contact: @Vku007</h4>
    </div>
  );
};

export default User;
