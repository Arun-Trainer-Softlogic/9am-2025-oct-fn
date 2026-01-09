import React, { useState, useEffect } from "react";

function FollowersList() {
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/arun-cloud-dev/followers"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch followers");
                }
                const data = await response.json();
                setFollowers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFollowers();
    }, []); // [] → run once on mount

    if (loading) return <p>Loading followers...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Followers</h2>
            <ul>
                {followers.map((follower) => (
                    <li key={follower.id} style={{listStyleType:"none"}}>
                        <img 
                        src={follower.avatar_url} 
                        alt={follower.login} 
                        width="40" 
                        style={{ borderRadius: "50%", marginRight: "10px" }} 
                        />

                        <a
                            href={follower.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {follower.login}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FollowersList;
