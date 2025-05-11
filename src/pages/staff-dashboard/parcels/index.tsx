import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import OrderTable from "../../../staff/components/orders/ordersTabel";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Parcels: FC = () => {
    return (
        <LayoutDashboard>
            <Box sx={{ pt: 3, px: { xs: 2, sm: 4 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mb: 2
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '22px', sm: '26px', md: '30px' },
                            lineHeight: '100%'
                        }}
                    >
                        Parcels Management
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: '13px', sm: '14px', md: '15px' },
                            lineHeight: '100%',
                            color: '#A6A8AA'
                        }}
                    >
                        Here is a quick overview you can browse through.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                        mb: 3
                    }}
                >
                    <Button
                        sx={{
                            width: { xs: '100%', sm: '250px' },
                            maxWidth: '100%',
                            height: '53px',
                            borderRadius: '30px',
                            bgcolor: '#0118D8',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: 700,
                            lineHeight: '100%',
                            textTransform: 'none'
                        }}
                        startIcon={<AddBoxIcon />}
                    >
                        Add New parcels
                    </Button>
                </Box>
            </Box>

            <OrderTable />
        </LayoutDashboard>
    );
};

export default Parcels;
