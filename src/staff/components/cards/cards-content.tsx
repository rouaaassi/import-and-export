import React, { FC } from "react";
import StaffCards from "./staff-cards";
import { Grid } from "@mui/material";

const CardsContent: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid>
        <StaffCards
          title="Total number of parcels today"
          parcels={3400}
          icon={<img src="/total.png" alt="Total" style={{ width: 25 }} />}
          bgcolor="#11D09F"
          color="#fff"
          textColor="#fff"
        />
      </Grid>
      <Grid>
        <StaffCards
          title="Number of parcels under delivery"
          parcels={1400}
          percent="50%"
          icon={<img src="/under.png" alt="Under Delivery" style={{ width: 25 }} />}
          bgcolor="#fff"
          color="#0E3056"
          textColor="#014BDB"
          border="#A6C5FF"
        />
      </Grid>
      <Grid>
        <StaffCards
          title="Number of parcels delivered today"
          parcels={1000}
          icon={<img src="/done.png" alt="Delivered" style={{ width: 25 }} />}
          bgcolor="#fff"
          color="#000"
          textColor="#D10000"
          border="#FFB3B3"
        />
      </Grid>
    </Grid>
  );
};

export default CardsContent
