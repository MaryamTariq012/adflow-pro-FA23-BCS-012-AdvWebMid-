import AddAd from "./AddAd";
import AdsList from "./AdsList";

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                AdFlow Pro Dashboard
            </h1>

            {/* ADD FORM */}
            <AddAd />

            {/* ADS LIST */}
            <AdsList />

        </div>
    );
}