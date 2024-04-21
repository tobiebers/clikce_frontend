import React, { useState, useContext, createContext } from 'react';
import ButtonGroup from "@/components/in-app/analytics/ButtonGroup";
import CurrentAccountUsed from "@/components/in-app/analytics/CurrentAccountUsed";
import FlipCard from "@/components/in-app/analytics/TopPerformingPosts";
import Lists from "@/components/in-app/analytics/Lists";
import TabChart from "@/components/in-app/analytics/TabChart";
import { Col, Row, Container } from "react-bootstrap";

export const UsernameContext = createContext({
  username: '',
  setUsername: () => {},
});

export const useUsername = () => useContext(UsernameContext);

export default function Analytics() {
    const [username, setUsername] = useState('');

    const onSelectUsername = (newUsername) => {
        setUsername(newUsername);
        console.log(`Ausgewählter Benutzername: ${newUsername}`);
    };

    return (
        <UsernameContext.Provider value={{ username, setUsername, onSelectUsername }}>
            <Container className="my-2 mx-2">
                <Row className="g-2">
                    {/* Linke Seite: Account-Informationen */}
                    <Col md={4} className="p-3">
                        <div className="mb-5">
                            <CurrentAccountUsed />
                        </div>
                        <div>
                            <ButtonGroup />
                        </div>
                        <div className="mt-5">
                            <FlipCard />
                        </div>
                    </Col>
                    {/* Rechte Seite: Charts und Logs */}
                    <Col md={8} className="p-3">
                        <div className="mb-5">
                            <TabChart />
                            <Lists />
                        </div>
                        {/* Hier könnten weitere Logs oder Informationen angezeigt werden */}
                    </Col>
                </Row>
            </Container>
        </UsernameContext.Provider>
    );
}
