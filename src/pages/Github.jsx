import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";

function Github() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.SECRETS_SCAN_OMIT_KEYS, // Ensure your .env file is configured
        });

        const response = await octokit.request("GET /user", {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to fetch GitHub profile. Please check your token and try again.");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-100">
        <div className="text-lg font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-lg font-semibold text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <img
          src={profile.avatar_url}
          alt="Profile Avatar"
          className="w-28 h-28 mx-auto rounded-full border border-gray-300 shadow-sm"
        />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">
          {profile.name || "Name not available"}
        </h1>
        <p className="text-gray-600 text-sm">{profile.bio || "No bio available"}</p>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Location: {profile.location || "Not specified"}</p>
          <p className="text-sm text-gray-500">Company: {profile.company || "Not specified"}</p>
        </div>
        <p className="mt-4">
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            View GitHub Profile
          </a>
        </p>
        <div className="mt-4 border-t pt-4 text-gray-700">
          <p className="font-medium">
            Total Repositories: <span className="font-bold">{profile.public_repos}</span>
          </p>
          <p className="font-medium">
            Followers: <span className="font-bold">{profile.followers}</span>
          </p>
          <p className="font-medium">
            Following: <span className="font-bold">{profile.following}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Github;
