import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const UserDetails = () => {
  const user = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex bg-[#5F33E1] justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <div className="text-center">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="mx-auto rounded-full h-20 w-20 mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">
              {user.firstName} {user.lastName}
            </h2>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span>{" "}
              {user.address.address}, {user.address.city}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Company:</span>{" "}
              {user.company.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
