import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { Home, Gamepad, User, Library, HelpCircle, Menu } from "lucide-react";
import AdvancedCarousel from "../components/AdvancedCarousel";
import { Download } from "lucide-react"; // Make sure this import points to the correct file

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 z-30 w-16 bg-gray-900 flex flex-col items-center py-4 space-y-8">
      <Link to="/" className={`${location.pathname === '/' ? 'text-purple-500' : 'text-gray-400'}`}>
        <Home className="ml-4" />
      </Link>
      <Link to="/vrApps" className={`${location.pathname === '/vrApps' ? 'text-purple-500' : 'text-gray-400'}`}>
        <Gamepad className="ml-4" />
      </Link>
      <Link to="/arApps" className={`${location.pathname === '/arApps' ? 'text-purple-500' : 'text-gray-400'}`}>
        <User className="ml-4" />
      </Link>
      <Link to="/library" className={`${location.pathname === '/library' ? 'text-purple-500' : 'text-gray-400'}`}>
        <Library className="ml-4" />
      </Link>
      <Link to="/help" className={`${location.pathname === '/help' ? 'text-purple-500' : 'text-gray-400'}`}>
        <HelpCircle className="ml-4 mt-auto" />
      </Link>
    </div>
  );
};

const AppCard = ({ name, category, rating, icon }) => (
  <div className="bg-gray-800 p-4 rounded-lg relative">
    <img src={icon} alt={name} className="w-20 h-20 rounded mb-2" />

    {/* Make name a clickable button */}
    <Link to={`/details/${name}`}>
      <h3 className="text-white font-semibold hover:underline">{name}</h3>
    </Link>

    <p className="text-gray-400 text-sm">{category}</p>

    <div className="flex items-center mt-2">
      <span className="text-yellow-500 mr-1">{rating}</span>
      <span className="text-yellow-500">★</span>
    </div>

    {/* Download icon button in the bottom-right corner */}
    <button
      className="absolute bottom-4 right-4  text-white p-2 rounded hover:bg-blue-700"
      onClick={() => alert("Downloading...")}
    >
      <Download className="w-5 h-5" />
    </button>
  </div>
);

const Homepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const featuredApps = [
    {
      title: "Qualcomm AR",
      description: "Apps to manage the everyday",
      price: "₹4,899.00",
      buttonText: "See details",
      image: "/image2.png",
    },
    {
      title: "VR Spotlight",
      description: "Featured games for the season",
      price: "",
      buttonText: "See details",
      image: "/image3.png",
    },
    {
      title: "Best AR,VR apps",
      description: "Top apps in Store",
      price: "",
      buttonText: "See details",
      image: "/image2.png",
    },
  ];

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 p-4 md:p-2 md:ml-16">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button
              className="md:hidden mr-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="text-white" />
            </button>
            <h1 className="text-xl font-bold">App Inventory</h1>
          </div>
          <input
            type="text"
            placeholder="Search AR and VR apps"
            className="bg-gray-800 px-4 py-1 rounded-full w-1/4 hidden md:block"
          />
        </header>
        <div className="mb-2">
          <AdvancedCarousel items={featuredApps} />
        </div>
        <h2 className="text-xl font-bold mb-4">Top Apps</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AppCard
            name="Xavatar"
            category="AR"
            rating="4.2"
            icon="/xavatar.png"
          />
          <AppCard
            name="Xaudio"
            category="AR"
            rating="3.5"
            icon="/xaudio.png"
          />
          <AppCard
            name="Xpresent"
            category="VR"
            rating="4.3"
            icon="/xpresent.png"
          />
          <AppCard
            name="Xreality"
            category="AR"
            rating="4.1"
            icon="/xreailty.png"
          />
          <AppCard name="Netflix" category="AR" rating="4.4" icon="/pwc.png" />
          <AppCard
            name="Object_Placement"
            category="VR"
            rating="4.0"
            icon="/object_placement.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
