import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const InstagramLogo = '/instagramLogoIcon.png';
const FacebookLogo = '/facebookLogoIcon.png';

function UsernameSelector({ usernames, selectedUsernames, onUsernameSelect, onRemoveUsername }) {
    const getPlatformLogo = (platform) => {
        switch(platform) {
            case 'Instagram': return InstagramLogo;
            case 'Facebook': return FacebookLogo;
            default: return null;
        }
    };

    return (
        <>
            <Form.Group>
                <Form.Label>Account</Form.Label>
                <Form.Control as="select" onChange={onUsernameSelect}>
                    <option value="">Select an account</option>
                    {usernames.map((account, index) => (
                        <option key={index} value={JSON.stringify(account)}>
                            {account.username} ({account.platform})
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            {selectedUsernames.map((account, index) => (
                <Card key={index} className="mb-2">
                    <Card.Body>
                        <Card.Title>
                            {account.username}
                            {account.platform && (
                                <img
                                    src={getPlatformLogo(account.platform)}
                                    alt={`${account.platform} Logo`}
                                    style={{ width: '20px', marginLeft: '10px' }}
                                />
                            )}
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => onRemoveUsername(account)}
                                style={{ marginLeft: '10px' }}
                            >
                                X
                            </Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            ))}

        </>
    );
}

export default UsernameSelector;