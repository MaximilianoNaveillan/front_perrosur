import Layout from "../components/Layout";
import dbConnect from "../lib/dbConnect";
import User from "../models/user";

export default function DashboardAdmin({ users }) {
  return (
    <>
      <div>dashboard...</div>
      {users.map((user) => (
        <div key={user._id}>{user.name}</div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();

    const res = await User.find({});
    const users = res.map((doc) => {
      const user = doc.toObject();
      user._id = `${user._id}`;
      user.start = new Date(user.start).toLocaleDateString();
      user.end = new Date(user.end).toLocaleDateString();
      return user;
    });
    return { props: { users } };
  } catch (error) {
    console.log(error);
  }
}
