

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    fullName: "",
    dateOfBirth: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await axios.get(
          "https://lms-j25h.onrender.com/api/auth/profile",
          { headers }
        );
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err.response?.data || err);
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.put(
        "https://lms-j25h.onrender.com/api/auth/profile",
        profile,
        { headers }
      );
      setSuccess("Profile updated successfully!");
      console.log("Profile updated:", response.data);
      setTimeout(() => navigate("/profile"), 2000); // Redirect to the profile page
    } catch (err) {
      console.error("Error updating profile:", err.response?.data || err);
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <h1 className="text-4xl text-center font-bold  bg-red-950 py-5 text-white mt-10 w-full">Update Your Profile</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-transparent p-6 shadow-amber-500 rounded-lg shadow-md"
      >
        <div className="mb-4  w-full">
          <label htmlFor="username" className="block font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
            className="w-full px-4   rounded-md py-2 border-2 border-red-950 bg-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2  rounded-md border-2 border-red-950 bg-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={profile.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2  rounded-md border-2 border-red-950  bg-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleInputChange}
            className="w-full px-4 py-2  rounded-md border-2 border-red-950 bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-transparent text-black font-bold shadow-md shadow-red-950 hover:bg-red-950 hover:text-white transition-all ease-in-out  delay-0 duration-1000 px-6 py-2 rounded-md w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
