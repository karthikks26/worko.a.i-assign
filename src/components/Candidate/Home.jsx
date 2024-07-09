import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../Common/SearchComponent";
import ListCard from "../Common/ListCard";
import apiService from "../../services/apiService";
import Loader from "../Loader";

function Home() {
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch referrals and services data
    Promise.all([apiService.getReferrals(), apiService.getServices()])
      .then(([referralsData, servicesData]) => {
        setReferrals(referralsData);
        setServices(servicesData);
      })
      .finally(() => setIsLoading(false)); // Update loading state when data is fetched
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredReferrals = referrals.filter(
    (referral) =>
      referral.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referral.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
          <SearchComponent onSearch={handleSearch} />
        </div>
        {isLoading ? (
          <Loader /> // Display loader component while data is loading
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Referrals</h3>
              <ListCard items={filteredReferrals} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ListCard items={filteredServices} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
