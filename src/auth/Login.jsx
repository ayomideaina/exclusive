import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Button from "../components/AppButton";
import useForm from "../hooks/useForm";
import useAuth from "../hooks/useAuth";
import { validateEmailOrPhone, validatePassword } from "../utils/validators";

export default function Login() {
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const { values, errors, isSubmitting, submitError, handleChange, handleSubmit } = useForm({
    initialValues: { emailOrPhone: "", password: "" },
    validate: (values) => ({
      emailOrPhone: validateEmailOrPhone(values.emailOrPhone),
      password: validatePassword(values.password),
    }),
    onSubmit: async (values) => {
      await logIn(values.emailOrPhone, values.password);
      navigate("/");
    },
  });

  return (
    <AuthLayout>
      <h1 className="text-3xl font-semibold mb-2">Log in to Exclusive</h1>
      <p className="text-text-secondary mb-8">Enter your details below</p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        <Field
          name="emailOrPhone"
          placeholder="Email or Phone Number"
          value={values.emailOrPhone}
          onChange={handleChange}
          error={errors.emailOrPhone}
        />

        <Field
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        {submitError && (
          <p className="text-primary text-sm" role="alert">
            {submitError}
          </p>
        )}

        <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </Button>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

function Field({ error, ...inputProps }) {
  return (
    <div>
      <input
        {...inputProps}
        aria-invalid={!!error}
        className={`w-full border-b pb-2 outline-none bg-transparent ${
          error ? "border-primary" : "border-border focus:border-primary"
        }`}
      />
      {error && (
        <span className="text-primary text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
}
