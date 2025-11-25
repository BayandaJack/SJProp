export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
                <h1 className="text-3xl font-extrabold text-red-600 mb-6">Welcome Back</h1>
                <p className="text-gray-700 mb-8 text-center">Sign in to your SJProp account using Google to manage your properties, save favorites, and more.</p>
                <button className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-3 shadow hover:bg-gray-100 hover:cursor-pointer transition font-semibold text-gray-700 text-lg">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}