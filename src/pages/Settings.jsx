import Navbar from "../components/Navbar";

function Settings() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-4">

          <h1 className="text-4xl font-bold mb-8">
            Settings
          </h1>

          <div className="space-y-6">

            {/* Account Settings */}

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Account Settings
              </h2>

              <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg">
                Edit Profile
              </button>
            </div>

            {/* Change Password */}

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Change Password
              </h2>

              <div className="grid gap-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="border p-3 rounded-lg"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  className="border p-3 rounded-lg"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border p-3 rounded-lg"
                />
              </div>

              <button className="mt-4 bg-cyan-500 text-white px-5 py-2 rounded-lg">
                Update Password
              </button>
            </div>

            {/* Preferences */}

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Preferences
              </h2>

              <div className="flex justify-between items-center py-3">
                <span>Enable Notifications</span>
                <input type="checkbox" />
              </div>

              <div className="flex justify-between items-center py-3">
                <span>Dark Mode</span>
                <input type="checkbox" />
              </div>

              <div className="flex justify-between items-center py-3">
                <span>Language</span>

                <select className="border p-2 rounded-lg">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>

            {/* Danger Zone */}

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-200">
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                Danger Zone
              </h2>

              <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
                Logout
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Settings;