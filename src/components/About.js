import User from "./User";
import UserClass from "./UserClass";
function About() {
  return (
    <div className="user-card">
      <h1>About</h1>
      <p>This is the About Us Page</p>
      <User name={"Vikash Upadhyay (functional)"} />
      <hr />
      <UserClass name={"Vikash Upadhyay (Class)"} />
    </div>
  );
}

export default About;
