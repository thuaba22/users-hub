import { useEffect, useState } from "react";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);
  return (
    <section className="bg-[#F3F0FF] py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Meet Our Users
        </h2>

        <div className="grid w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {usersList?.users?.map((user) => (
            <div key={user?.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={user.image}
                className="mb-4 w-[50%] mx-auto object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-blue-600 text-center">{user.email}</p>
              <p className="text-center text-gray-500 text-[12px]">
                {user.address.address}, {user.address.city}
              </p>
              <p className="text-center text-[12px] text-gray-500">
                Works In: {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersList;
