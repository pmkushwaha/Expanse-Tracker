import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <h3 className="fw-bold text-primary">ExpenseTracker</h3>

        <div className="ms-auto">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
            <button
            className="btn btn-outline-primary me-2"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center mt-5">
        <h1 className="fw-bold">
          Track Your Expenses & Earnings Easily 💰
        </h1>

        <p className="text-muted mt-3">
          Manage your finances efficiently with a simple and secure platform.
          Monitor your income and expenses in one place.
        </p>

        <button
          className="btn btn-primary mt-3 px-4"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <div className="row text-center">

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="text-success">💵 Earnings</h4>
              <p className="text-muted">
                Keep track of all your income sources and monitor your growth.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="text-danger">💸 Expenses</h4>
              <p className="text-muted">
                Record and analyze your spending habits easily.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 py-4 bg-white shadow-sm">
        <p className="text-muted mb-0">
          © 2026 ExpenseTracker | Built with React & Django | By Prem
        </p>
      </footer>

    </div>
  );
}

export default LandingPage;