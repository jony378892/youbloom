import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+254\d{9}$/;
    return phoneRegex.test(phone);
  };

  // Responsible for handing login and validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedPhone = phoneNumber.trim();

    if (!trimmedPhone) {
      setError("Phone number is required");
      return;
    }

    if (!trimmedPhone.startsWith("+254")) {
      setError("Phone number must start with country code +254");
      return;
    }

    if (!validatePhoneNumber(trimmedPhone)) {
      setError("Invalid phone number format. Expected: +254712345678");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (trimmedPhone === "+254712345678") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            phoneNumber: trimmedPhone,
            isAuthenticated: true,
          }),
        );

        setPhoneNumber("");
        navigate("/");
      } else {
        setError(
          "Invalid credentials. Try: +254712345678 for testing purposes",
        );
      }
    } catch {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-gray-600 mb-6">
          Enter your phone number to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="+254712345678"
              disabled={loading}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              } ${loading ? "bg-gray-100 cursor-not-allowed" : ""}`}
            />
            <p className="text-xs text-gray-500 mt-2">Ex - +254712345678</p>
          </div>

          {/* Error notification */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-gray-600"
                : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
