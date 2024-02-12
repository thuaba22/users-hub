import { useForm, Controller } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const UserForm = ({ onAddUser }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAddUser(data);
    // Reset form values
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("address.street", "");
    setValue("address.suite", "");
    setValue("address.city", "");
    setValue("company.name", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 ">
      <h2 className="text-2xl text-center font-semibold mb-10">
        Add a New User
      </h2>
      <div className="grid w-full mx-auto grid-cols-3 gap-4">
        <div>
          <label htmlFor="firstName">First Name: </label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "First Name is required" }}
            render={({ field }) => <input {...field} type="text" />}
          />
          <span className="text-red-500">{errors.firstName?.message}</span>
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Last Name is required" }}
            render={({ field }) => <input {...field} type="text" />}
          />
          <span className="text-red-500">{errors.lastName?.message}</span>
        </div>
        <div>
          <label htmlFor="street">Street: </label>
          <Controller
            name="address.street"
            control={control}
            defaultValue=""
            rules={{ required: "Street is required" }}
            render={({ field }) => <input {...field} type="text" />}
          />
          <span className="text-red-500">
            {errors.address?.street?.message}
          </span>
        </div>
        <div>
          <label htmlFor="suite">Suite: </label>
          <Controller
            name="address.suite"
            control={control}
            defaultValue=""
            rules={{ required: "Suite is required" }}
            render={({ field }) => <input {...field} type="text" />}
          />
          <span className="text-red-500">{errors.address?.suite?.message}</span>
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <Controller
            name="address.city"
            control={control}
            defaultValue=""
            rules={{ required: "City is required" }}
            render={({ field }) => <input {...field} type="text" />}
          />
          <span className="text-red-500">{errors.address?.city?.message}</span>
        </div>
        <div>
          <label htmlFor="companyName">Company Name: </label>
          <Controller
            name="company.name"
            control={control}
            defaultValue=""
            rules={{ required: "Company Name is required" }}
            render={({ field }) => <input {...field} type="text" />}
          />
          <span className="text-red-500">{errors.company?.name?.message}</span>
        </div>
        <div>
          <button
            type="submit"
            className="mt-4 bg-[#5F33E1] text-white px-4 py-2 rounded-md"
          >
            Add User
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
