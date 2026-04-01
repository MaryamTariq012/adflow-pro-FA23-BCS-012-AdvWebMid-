export default function Sidebar() {
    return (
        <div className="w-64 bg-white shadow-md min-h-screen p-5">

            <h1 className="text-xl font-bold text-blue-600 mb-6">
                AdFlow Pro
            </h1>

            <ul className="space-y-4">
                <li>Dashboard</li>
                <li>Users</li>
                <li>Analytics</li>
                <li>Settings</li>
            </ul>

        </div>
    );
}