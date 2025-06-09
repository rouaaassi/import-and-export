import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { FC } from "react";
import OrderTable from "../../../staff/components/orders/ordersTabel";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";
import AddSharpIcon from '@mui/icons-material/AddSharp';

interface ParcelsProps {
    setDarkMode: (val: boolean) => void;
    darkMode: boolean;
}

const Parcels: FC<ParcelsProps> = ({ setDarkMode, darkMode }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
        <LayoutDashboard setDarkMode={setDarkMode} darkMode={darkMode}>
            <Box sx={{ 
                pt: 3, 
                px: { xs: 2, sm: 4, md: 8 },
                bgcolor: isDarkMode ? 'rgb(18, 24, 57)' : '#F5F7FA',
                minHeight: '100vh'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'stretch', sm: 'center' },
                        justifyContent: 'space-between',
                        gap: 2,
                        mb: 4,
                        maxWidth: '1200px',
                        mx: 'auto'
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '24px', sm: '28px', md: '32px' },
                                color: isDarkMode ? '#fff' : '#1A1A1A',
                                lineHeight: 1.2
                            }}
                        >
                            Parcels Management
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: { xs: '14px', sm: '16px' },
                                color: isDarkMode ? '#A0AEC0' : '#666666',
                                lineHeight: 1.5
                            }}
                        >
                            Here is a comprehensive overview of all parcels you can browse and manage.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            width: { xs: '100%', sm: '200px' },
                            height: '43px',
                            borderRadius: '12px',
                            bgcolor: '#0118D8',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 600,
                            textTransform: 'none',
                            alignSelf: { xs: 'stretch', sm: 'center' },
                            mt: { xs: 2, sm: 0 },
                            '&:hover': {
                                bgcolor: '#011188',
                            }
                        }}
                        startIcon={<AddSharpIcon />}
                    >
                        Add New Parcel
                    </Button>
                </Box>

                <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                    <OrderTable />
                </Box>
            </Box>
        </LayoutDashboard>
    );
};

export default Parcels;
