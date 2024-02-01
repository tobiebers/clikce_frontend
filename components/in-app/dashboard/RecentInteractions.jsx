import React, { useEffect, useState } from "react";
import { Table, DropdownButton, Dropdown, Button } from "react-bootstrap";

export default function RecentInteractions() {
  const [dropdownOptions, setDropdownOptions] = useState({
    account: [],
    accountGroup: [],
    interaction: [],
  });
  const [selectedValues, setSelectedValues] = useState({
    account: "",
    accountGroup: "",
    interaction: "",
    total: "0", // Hier den festen Wert für Total setzen
  });

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetch-recent-interactions');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.account && Array.isArray(data.account) &&
          data.account_group && Array.isArray(data.account_group) &&
          data.interaction && Array.isArray(data.interaction)) {
        setDropdownOptions({
          account: data.account,
          accountGroup: data.account_group,
          interaction: data.interaction
        });
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching dropdown options:", error);
    }
  };

  fetchData();
}, []);

  const handleDropdownChange = (key, value) => {
    setSelectedValues(prevValues => ({ ...prevValues, [key]: value }));
  };

    const handleInteractionButton = async () => {
  try {
    // Senden einer Anfrage an den Flask-Server
    const response = await fetch('http://localhost:5000/fetch-interaction-button', {
      method: 'GET', // Oder 'POST', je nachdem, wie Ihre Flask-Route konfiguriert ist
    });

    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht ok');
    }

    // Hier können Sie zusätzliche Aktionen durchführen, wenn die Anfrage erfolgreich war
    console.log('Daten erfolgreich aktualisiert');

  } catch (error) {
    console.error('Fehler beim Aktualisieren der Daten:', error);
  }
};

  return (
    <div className="background-color-secondary mt-3">
      <p className="text-n text_recentInteractions mb-1">Recent Interactions</p>
      <Table className="background-color-secondary">
        <thead>
          <tr>
            <td>
              <DropdownButton
                className=""
                variant=""
                id="dropdown-account"
                title="Account"
                onSelect={(value) => handleDropdownChange("account", value)}
              >
                {dropdownOptions.account.map((option) => (
                  <Dropdown.Item key={option} eventKey={option}>
                    {option}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </td>
            <td>
              <DropdownButton
                className=""
                variant=""
                id="dropdown-account-group"
                title="Account Group"
                onSelect={(value) => handleDropdownChange("accountGroup", value)}
              >
                {dropdownOptions.accountGroup.map((option) => (
                  <Dropdown.Item key={option} eventKey={option}>
                    {option}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </td>
            <td>
              <DropdownButton
                className=""
                variant=""
                id="dropdown-interaction"
                title="Interaction"
                onSelect={(value) => handleDropdownChange("interaction", value)}
              >
                {dropdownOptions.interaction.map((option) => (
                  <Dropdown.Item key={option} eventKey={option}>
                    {option}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </td>
            <td>
              <Button variant="" className="p-0 m-0" onClick={handleInteractionButton}>
                Total
              </Button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedValues.account}</td>
            <td>{selectedValues.accountGroup}</td>
            <td>{selectedValues.interaction}</td>
            <td>{selectedValues.total}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}