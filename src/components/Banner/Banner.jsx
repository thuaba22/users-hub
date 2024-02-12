import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content w-[90%] mx-auto flex-col lg:flex-row-reverse">
        <img
          className="lg:w-[100%]"
          src="https://i.postimg.cc/d1qd9609/girlImg.png"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Your Personalized User
            <br />
            Management System
          </h1>
          <p className="py-6">
            Welcome to UsersHub - your go-to platform for effortless user
            management. Explore a user-friendly interface, seamlessly add new
            users, and effortlessly navigate through profiles. With responsive
            design, UsersHub adapts to your needs across devices. Join us and
            simplify your user management experience!
          </p>
          <Link
            to="/"
            className="btn text-white bg-[#5F33E1] hover:bg-[#5F33E1]"
          >
            Let&#39;s Explore <FaArrowRightToBracket />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
