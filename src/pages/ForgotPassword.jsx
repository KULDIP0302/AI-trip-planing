import Navbar from "../components/Navbar";
import{useState}from"react";
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const[message,setMessage]=useState("");
    const handleReset=()=>{
        if(!email){
            setMessage("please enter your email address");
            return;
        }
            setMessage("password reset link sent successfully");
    
        
    };
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center mb-3">
            Forgot Password
          </h1>

          <p className="text-gray-500 text-center mb-6">
            Enter your email address and we'll send you a password reset link.
          </p>

          <input
            type="email" placeholder="Enter Email Address" value={email}
             onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
            />

          <button
  onClick={handleReset}
  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold"
>
  Send Reset Link
</button>
{message && (
  <p className="text-center text-green-600 mt-4">
    {message}
  </p>
)}
        </div>

      </div>
    </>
  );
}

export default ForgotPassword;