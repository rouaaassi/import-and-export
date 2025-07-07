import React, { FC, useState } from "react";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography, Button } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import FlagIcon from '@mui/icons-material/Flag';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import ParcelTypeCard from "../../../staff/components/parcels/parcel-type-card";
import AddressCard from "../../../staff/components/parcels/address-card";
import CentersList from "./parcels_details";
import TrackParcel from "../../../staff/components/parcels/truck-parcel-status";

const ParcelsDetails: FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <LayoutDashboard setDarkMode={setDarkMode} darkMode={darkMode}>
            <Box display="flex" flexDirection="row" gap={10} sx={{pl:'95px'}}>
                <Box>
                    {/* Header */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 20,
                            alignItems: "center",
                            px: 3,
                            pt: 3
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: 700, fontSize: "30px", lineHeight: "100%" }}>
                                Parcels Detail
                            </Typography>
                            <Typography sx={{ color: '#A6A8AA', fontSize: '15px', fontWeight: 400 }}>
                                Here is a quick overview you can browse through.
                            </Typography>
                        </Box>

                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '30px',
                                borderColor: '#D0D0D0',
                                color: '#3B3B3B',
                                padding: '8px 16px',
                                textTransform: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                                width: { xs: '100%', sm: '250px' },
                                maxWidth: '100%',
                                height: '53px',
                                fontSize: '15px',
                                fontWeight: 700,
                                lineHeight: '100%',
                            }}
                        >
                            <CalendarMonthIcon sx={{ color: '#007B7A' }} />
                            <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#3B3B3B' }}>
                                January 2024–May
                            </Typography>
                            <ArrowDropDownIcon sx={{ color: '#3B3B3B' }} />
                        </Button>
                    </Box>

                    <Box sx={{ p: 3 }}>
                        {/* Address Section */}
                        <Box mb={3}>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <RoomIcon color="primary" />
                                <Typography fontWeight="bold">Pick-up and delivery address</Typography>
                            </Box>

                            <Box display="flex" gap={2} flexWrap="wrap">
                                <Box>
                                    <Typography fontWeight="bold" mb={0.5}>From</Typography>
                                    <AddressCard icon={<RoomIcon />} label="From" address="27 Ayar street Damascus" />
                                </Box>
                                <Box>
                                    <Typography fontWeight="bold" mb={0.5}>Service Center</Typography>
                                    <AddressCard icon={<FlagIcon />} label="TO" address="27 Ayar street Damascus" />
                                </Box>
                            </Box>
                        </Box>

                        {/* Parcel Type */}
                        <Box mb={3}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <StorageIcon color="primary" />
                                <Typography fontWeight="bold">Parcel type</Typography>
                            </Box>
                            <Box mt={1}>
                                <ParcelTypeCard />
                            </Box>
                        </Box>

                        {/* Customer Info */}
                        <Box>
                            <Box display="flex" alignItems="center" gap={1} pb={3}>
                                <PersonIcon color="primary" />
                                <Typography fontWeight="bold">Customer Information</Typography>
                            </Box>
                            <CentersList />
                        </Box>
                    </Box>
                </Box>

                {/* Right panel (Tracking) */}
                <TrackParcel />
            </Box>


        </LayoutDashboard>
    );
};

export default ParcelsDetails;
