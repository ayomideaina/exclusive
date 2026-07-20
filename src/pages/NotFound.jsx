import { Link } from "react-router-dom";
import Button from "../components/AppButton";

export default function NotFound() {
  return (
    <div className="container-app py-24 text-center">
      <p className="text-sm text-text-muted mb-16">Home / 404 Error</p>
      <h1 className="text-6xl font-semibold mb-6">404 Not Found</h1>
      <p className="text-text-secondary mb-10">Your visited page not found. You may go home page.</p>
      <Link to="/">
        <Button variant="primary">Back to home page</Button>
      </Link>
    </div>
  );
}

