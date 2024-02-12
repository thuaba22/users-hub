import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">This is user details: {user.firstName}</h2>
    </div>
  );
};

export default UserDetails;
