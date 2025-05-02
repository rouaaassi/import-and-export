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
  IconButton,
} from "@mui/material";
import React, { FC, useState } from "react";
import { ICentersList } from "../../../../types/centers-list";

const data: ICentersList[] = [
  {
    id: 1,
    ServiceCenterName: "Serial shipment",
    location: "Damascus",
    parcels: 200,
    phoneNumber: "+9630000000",
    Actions: false,
    status: undefined,
  },
  {
    id: 2,
    ServiceCenterName: "Ship your goods",
    location: "Hama",
    parcels: 100,
    phoneNumber: "+9630000000",
    Actions: true,
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
              <TableCell sx={{ fontWeight: "bold" }}>Service Center Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Parcels</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Number Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {centers.map((center) => (
              <TableRow key={center.id}>
                <TableCell>{center.ServiceCenterName}</TableCell>
                <TableCell>{center.location}</TableCell>
                <TableCell>{center.parcels}</TableCell>
                <TableCell>{center.phoneNumber}</TableCell>
                <TableCell>
                  <Switch
                    checked={center.Actions}
                    onChange={() => handleToggle(center.id)}
                    color="success"
                  />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <img src="/action1.png" style={{ width: "24px", height: "24px" }} />
                  </IconButton>
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
