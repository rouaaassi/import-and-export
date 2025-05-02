import { Avatar, Box, Button, IconButton } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const ProfileModal: FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);


    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string);
                setShowModal(false);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt="profile photo"
                    style={{ width: 24, height: 24 }}
                />
            ) : (
                <IconButton
                    onClick={() => setShowModal(true)}
                >
                    <Avatar></Avatar>
                </IconButton>
            )}

            {showModal && (
                <Box
                sx={{
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
                  }}
            >
                    <Box className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-4"> Upload photo</h2>

                        <div className="flex flex-col gap-4">
                        <IconButton
                                onClick={() => setShowModal(false)}
                                 sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    color: '#fff',
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <label className="bg-[#0118D8] text-white px-4 py-2 rounded text-center cursor-pointer">
                                open your Device
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ProfileModal;
