import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔁 Sync user from localStorage
  const syncUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  useEffect(() => {
    // Initial load
    syncUser();

    // Listen for storage changes (other tabs)
    window.addEventListener("storage", syncUser);

    // Listen for custom login/logout events (same tab)
    window.addEventListener("auth-change", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("auth-change", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");

    // 🔔 Notify app
    window.dispatchEvent(new Event("auth-change"));

    window.location.href = "/login";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            CMS
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>

            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </a>

            {user ? (
              <>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 font-semibold rounded-lg text-sm">
                  PIN: {user.pin}
                </span>

                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <a href="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </a>

          {user ? (
            <>
              <div className="block text-blue-600 font-semibold">
                PIN: {user.pin}
              </div>

              <button
                onClick={handleLogout}
                className="block text-red-600 font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <a href="/login" className="block text-gray-700 hover:text-blue-600">
              Login
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
