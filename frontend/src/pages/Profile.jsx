import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10">

        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Profile Card */}

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center">

              <img
                src="https://i.pravatar.cc/200"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-cyan-500"
              />

              <h2 className="text-2xl font-bold mt-4">
                Kuldip Vasava
              </h2>

              <p className="text-gray-500">
                Traveler
              </p>

              <button className="mt-5 bg-cyan-500 text-white px-6 py-2 rounded-lg">
                Change Photo
              </button>

            </div>

            {/* Profile Details */}

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value="Kuldip Vasava"
                    className="w-full border p-3 rounded-lg"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    value="kuldip@gmail.com"
                    className="w-full border p-3 rounded-lg"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="text"
                    value="+91 9876543210"
                    className="w-full border p-3 rounded-lg"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Country
                  </label>

                  <input
                    type="text"
                    value="India"
                    className="w-full border p-3 rounded-lg"
                    readOnly
                  />
                </div>

              </div>

              <button className="mt-8 bg-cyan-500 text-white px-8 py-3 rounded-lg">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;