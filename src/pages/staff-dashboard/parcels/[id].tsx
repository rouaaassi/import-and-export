import React, { FC, useState } from "react";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography, Button, Modal, TextField, IconButton } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import FlagIcon from '@mui/icons-material/Flag';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import ParcelTypeCard from "../../../staff/components/parcels/parcel-type-card";
import AddressCard from "../../../staff/components/parcels/address-card";
import CentersList from "../../../staff/components/centers/centers-list";
import TrackParcel from "../../../staff/components/parcels/truck-parcel-status";
import CloseIcon from '@mui/icons-material/Close';
// import { edit } from '../../../../api/handlers/edit-parcel';

const ParcelsDetails: FC = () => {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Form states
    const [name, setName] = useState('');
    const [parcel, setParcel] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const handleSubmit = async () => {
    //     try {
    //         const parcelForm = { name, parcel, number, location };
    //         const response = await edit(parcelForm);
    //         console.log("Parcel updated successfully:", response);
    //         handleClose();
    //     } catch (error) {
    //         console.error("Error occurred while editing parcel:", error);
    //     }
    // };

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

            {/* Action buttons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                    px: 3,
                    pb: 3,
                    mt: 1,
                    mr: 10
                }}
            >
                <Button
                    sx={{
                        bgcolor: "#D27E14",
                        color: "#fff",
                        borderRadius: "30px",
                        fontWeight: 700,
                        fontSize: "18px",
                        width: "200px",
                        height: "56px",
                        textTransform: "none",
                        "&:hover": { bgcolor: "#b4660f" },
                    }}
                >
                    Update
                </Button>

                <Button
                    onClick={handleOpen}
                    sx={{
                        bgcolor: "#0118D8",
                        color: "#fff",
                        borderRadius: "30px",
                        fontWeight: 700,
                        fontSize: "18px",
                        width: "200px",
                        height: "56px",
                        textTransform: "none",
                        "&:hover": { bgcolor: "#0014b3" },
                    }}
                >
                    Edit parcel
                </Button>
            </Box>

            {/* Modal */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backdropFilter: 'blur(6px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1300,
                }}>
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: 4,
                            borderRadius: 4,
                            minWidth: 320,
                            boxShadow: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            position: 'relative',
                        }}
                    >
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                color: '#555',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Typography variant="h6" fontWeight="bold" textAlign="center">
                            Edit Parcel
                        </Typography>

                        <TextField
                            label="New Customer Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <TextField
                            label="Location"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />

                        <TextField
                            label="Edit Parcel Description"
                            type="text"
                            value={parcel}
                            onChange={(e) => setParcel(e.target.value)}
                        />

                        <TextField
                            label="New Phone Number"
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            // onClick={handleSubmit}
                            sx={{
                                mt: 2,
                                borderRadius: '30px',
                                backgroundColor: '#0118D8',
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#115293' },
                            }}
                        >
                            Save
                        </Button>
                     
                    </Box>
                </Box>
            </Modal>
        </LayoutDashboard>
    );
};

export default ParcelsDetails;
