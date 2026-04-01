import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-6 shadow rounded">
                <h1 className="text-xl mb-4">Login</h1>

                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white px-4 py-2"
                >
                    Login
                </button>
            </div>
        </div>
    );
}