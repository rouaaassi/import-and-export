import { Avatar, Box, IconButton } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

const ProfileModal: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vpvajzyt"); 

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/ds15utsvr/image/upload",
        formData
      );
      const url = res.data.secure_url;
      setImageSrc(url);
      setShowModal(false);

    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="profile"
          style={{ width: 24, height: 24, borderRadius: "50%" }}
        />
      ) : (
        <IconButton onClick={() => setShowModal(true)}>
          <Avatar />
        </IconButton>
      )}

      {showModal && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          <Box className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-lg font-bold mb-4">Upload photo</h2>

            <IconButton
              onClick={() => setShowModal(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#000",
              }}
            >
              <CloseIcon />
            </IconButton>

            <label className="bg-[#0118D8] text-white px-4 py-2 rounded text-center cursor-pointer">
              Open Your Device
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProfileModal;
