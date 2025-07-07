import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
} from "@mui/material";
import React, { FC, useState } from "react";
import { IParcelsDetails } from "../../../../types/parcel_details";

const data: IParcelsDetails[] = [
  {
    id: 1,
    customerName: "Serial shipment",
    serviceCenter:'Damascus',
    destination:'Aleppo',
    weight:'130',
    date: new Date(),
    Actions: false,
    status: undefined,
  },
];

const CentersList: FC = () => {
  const [centers, setCenters] = useState(data);

  const handleToggle = (id: number) => {
    const updated = centers.map((center) =>
      center.id === id ? { ...center, Actions: !center.Actions } : center
    );
    setCenters(updated);
  };

  return (
    <Card sx={{ borderRadius: "30px", overflow: "hidden", boxShadow: 4, width: "765px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="centers table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#E3F2FD" }}>
              <TableCell sx={{ fontWeight: "bold" }}>customer name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>service center</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>destination</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>weight </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {centers.map((center) => (
              <TableRow key={center.id}>
                <TableCell>{center.customerName}</TableCell>
                <TableCell>{center.serviceCenter}</TableCell>
                <TableCell>{center.destination}</TableCell>
                <TableCell>{center.weight}</TableCell>
                <TableCell>{center.date.toLocaleDateString()}</TableCell>
                <TableCell>
                  <Switch
                    checked={center.Actions}
                    onChange={() => handleToggle(center.id)}
                    color="success"
                  />
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CentersList;
