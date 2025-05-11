import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import TruckStepper from './truck-stepper'
import { warning } from "framer-motion";
const TrackParcel: FC = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: "column", width: '400px', height: '80vh', border: '2px solid #fff', borderRadius: '30px', p: 3, gap: 3, mt: 3, boxShadow: '0 14px 30px rgba(0, 0, 0, 0.4)', }}>
                <Typography sx={{ fontWeight: 700, fontSize: "24px", lineHeight: "100%", top: '53px', left: '40px' }}>Track parcel status</Typography>
                <Typography sx={{
                    fontWeight: 400,
                    fontSize: { xs: '13px', sm: '14px', md: '17px' },
                    lineHeight: '100%',
                    color: '#A6A8AA',

                }} > The package is now on its way to the shipping center<br /> in Damascus.It will take 30 minutes.</Typography>
                <TruckStepper />
                <Box height="400px" borderRadius="16px" overflow="hidden">
                    <MapContainer center={[33.5138, 36.2765]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[33.5138, 36.2765]}>
                            <Popup>your site </Popup>
                        </Marker>
                    </MapContainer>
                </Box>
            </Box >
            
        </>
    )
}
export default TrackParcel;