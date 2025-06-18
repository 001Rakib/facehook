import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../assets/useAuth";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { ...formData };
    setAuth({ user });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
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
      <Field>
        <button
          className="bg-lwsGreen auth-input  font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
