import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
import './DbMonitor.css';

const DbMonitor = () => {
    const [data, setData] = useState({ users: [], favorites: [] });
    const [isVisible, setIsVisible] = useState(false);
    const [lastAction, setLastAction] = useState('System Idle');

    const fetchData = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/db-monitor`);
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error('Monitor Fetch Error:', err);
        }
    };

    useEffect(() => {
        if (!isVisible) return;
        fetchData();
        const interval = setInterval(fetchData, 3000); // Polling for "live" feel
        return () => clearInterval(interval);
    }, [isVisible]);

    if (!isVisible) {
        return (
            <button className="db-monitor-toggle" onClick={() => setIsVisible(true)}>
                🛠️ Open DB Live Monitor
            </button>
        );
    }

    return (
        <div className="db-monitor">
            <div className="db-monitor-header">
                <h3>💾 Database Live Movement (DBMS Demo)</h3>
                <button onClick={() => setIsVisible(false)}>✖</button>
            </div>
            
            <div className="db-monitor-content">
                <div className="db-section">
                    <h4>👤 Users Table (Last 3)</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(u => (
                                <tr key={u.user_id}>
                                    <td>{u.user_id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="db-section">
                    <h4>❤️ Favorites Table (Last 3)</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Product</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.favorites.map(f => (
                                <tr key={f.fav_id}>
                                    <td>{f.fav_id}</td>
                                    <td>{f.user}</td>
                                    <td>{f.product}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="db-monitor-footer">
                <span className="live-status">● LIVE SYNCING</span>
                <span className="info">Teacher: Data reflects actual SQL rows in database.</span>
            </div>
        </div>
    );
};

export default DbMonitor;
