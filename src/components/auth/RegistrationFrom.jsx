import { useForm } from "react-hook-form";
import Field from "../common/Field";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationFrom = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  const handleRegister = async (formData) => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
    >
      <Field label={"First Name"} error={errors.firstName}>
        <input
          className={`auth-input bg-lighterDark ${
            errors.firstName ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          name="firstName"
          id="firstName"
          {...register("firstName", {
            required: "First Name is required",
          })}
        />
      </Field>
      <Field label={"Last Name"} error={errors.lastName}>
        <input
          className={`auth-input bg-lighterDark ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          name="lastName"
          id="lastName"
          {...register("lastName", {
            required: "Last Name is required",
          })}
        />
      </Field>
      <Field label={"Email"} error={errors.email}>
        <input
          className={`auth-input bg-lighterDark ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </Field>
      <Field label={"Password"} error={errors.password}>
        <input
          className={`auth-input bg-lighterDark ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password Must be 8 Characters Long",
            },
          })}
        />
      </Field>

      <p className="text-red-600">{errors?.root?.random?.message}</p>

      <Field>
        <button
          className="bg-lwsGreen auth-input  font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegistrationFrom;
