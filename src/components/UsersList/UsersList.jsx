import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsersList(data.users));
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    let filteredUsers = usersList;

    // Filter by name
    if (searchTerm) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSortOption) {
      filteredUsers.sort((a, b) => {
        const aValue =
          selectedSortOption.value === "company.name"
            ? String(a.company.name).toLowerCase()
            : String(a[selectedSortOption.value]).toLowerCase();

        const bValue =
          selectedSortOption.value === "company.name"
            ? String(b.company.name).toLowerCase()
            : String(b[selectedSortOption.value]).toLowerCase();

        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
      });
    }

    return filteredUsers;
  }, [usersList, searchTerm, selectedSortOption]);

  const sortOptions = [
    { value: "firstName", label: "Sort by Name" },
    { value: "email", label: "Sort by Email" },
    { value: "company.name", label: "Sort by Company Name" },
  ];

  return (
    <section className="bg-[#F3F0FF] py-12">
      <div className="container w-[90%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Meet Our Users</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search by name"
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              options={sortOptions}
              isSearchable={false}
              placeholder="Sort by"
              value={selectedSortOption}
              onChange={(selectedOption) =>
                setSelectedSortOption(selectedOption)
              }
            />
          </div>
        </div>

        <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedUsers.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={user.image}
                className="mb-4 w-[50%] mx-auto object-cover rounded-full"
              />
              <Link to={`/user-details/${user.id}`}>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {user.firstName} {user.lastName}
                </h3>
              </Link>
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
