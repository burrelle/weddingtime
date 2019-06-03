import React from "react";
import { Table } from "semantic-ui-react";

interface Guest {
  id: string;
  forename: string;
  surname: string;
  attending: boolean;
}

interface Props {
  guests: [Guest];
}

export default function GuestsTable({ guests }: Props) {
  return (
    <Table celled={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Forename</Table.HeaderCell>
          <Table.HeaderCell>Surname</Table.HeaderCell>
          <Table.HeaderCell>Attending</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {guests.map(({ id, forename, surname, attending }: Guest) => (
          <Table.Row key={id}>
            <Table.Cell>{forename}</Table.Cell>
            <Table.Cell>{surname}</Table.Cell>
            <Table.Cell>{attending}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
