import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import UsersList from "../../components/UsersList/UsersList";

const Users = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <UsersList></UsersList>
      <Footer></Footer>
    </div>
  );
};

export default Users;
