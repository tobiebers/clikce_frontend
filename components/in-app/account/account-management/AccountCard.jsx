import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const InstagramLogo = '/instagramLogoIcon.png';
const FacebookLogo = '/facebookLogoIcon.png';

export default function AccountCard() {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [followers, setFollowers] = useState({});

    useEffect(() => {
        const fetchAccounts = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/instagram-profiles');
                if (response.ok) {
                    const data = await response.json();
                    setAccounts(data.accounts);
                } else {
                    console.error('Fehler beim Laden der Accounts');
                }
            } catch (error) {
                console.error('Netzwerkfehler:', error);
            }
            setLoading(false);
        };

        fetchAccounts();
    }, []);

    useEffect(() => {
        const fetchFollowers = async (username) => {
            try {
                const response = await fetch(`http://localhost:5000/followers/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setFollowers(prev => ({ ...prev, [username]: data.followers }));
                }
            } catch (error) {
                console.error('Fehler beim Laden der Follower:', error);
            }
        };

        accounts.forEach(account => {
            fetchFollowers(account.username);
        });
    }, [accounts]);

    const getPlatformLogo = (platform) => {
        switch (platform) {
            case 'Instagram': return InstagramLogo;
            case 'Facebook': return FacebookLogo;
            default: return null;
        }
    };

    const deleteAccount = async (username) => {
        try {
            const response = await fetch('http://localhost:5000/delete-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });

            if (response.ok) {
                setAccounts(accounts.filter(account => account.username !== username));
            } else {
                console.error('Fehler beim Löschen des Accounts');
            }
        } catch (error) {
            console.error('Netzwerkfehler:', error);
        }
    };

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            {accounts.map((account, index) => (
                <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>{account.username}</Card.Title>
                        <Card.Text>
                            {account.platform &&
                                <img
                                    src={getPlatformLogo(account.platform)}
                                    alt={`${account.platform} Logo`}
                                    style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                />
                            }
                            Follower: {followers[account.username] || 'Laden...'}
                        </Card.Text>
                        <Button variant="danger" onClick={() => deleteAccount(account.username)}>
                            Löschen
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
