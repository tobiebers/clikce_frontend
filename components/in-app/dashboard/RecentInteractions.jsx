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
    total: "0", // Annahme: 'total' wird durch die Backend-Antwort aktualisiert
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
  const { account, accountGroup, interaction } = selectedValues;

  try {
    const response = await fetch(`http://localhost:5000/fetch-interaction-button`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ account, accountGroup, interaction }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Daten erfolgreich aktualisiert', data);

    // Aktualisiere den State basierend auf der Antwort des Backends
    setSelectedValues(prevValues => ({
      ...prevValues,
      total: data.interaction_count.toString(), // Konvertiere in String, falls notwendig
    }));
  } catch (error) {
    console.error('Fehler beim Aktualisieren der Daten:', error);
  }
};


  return (
    <div className="background-color-secondary">
      <p className="text-n text_recentInteractions">Recent Interactions</p>
      <Table>
        <thead>
          <tr>
            <td>
              <DropdownButton
                id="dropdown-account"
                title="Account"
                onSelect={(value) => handleDropdownChange("account", value)}
                variant
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
                id="dropdown-account-group"
                title="Account Name"
                onSelect={(value) => handleDropdownChange("accountGroup", value)}
                variant
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
                id="dropdown-interaction"
                title="Interaction"
                onSelect={(value) => handleDropdownChange("interaction", value)}
                variant
              >
                {dropdownOptions.interaction.map((option) => (
                  <Dropdown.Item key={option} eventKey={option}>
                    {option}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </td>
            <td>
              <Button className="p-1 m-0 button_umrandung" onClick={handleInteractionButton}>
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
