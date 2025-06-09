import { Box, IconButton } from "@mui/material";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

interface UserResponse {
  image: string;
}

interface CloudinaryResponse {
  secure_url: string;
}

const ProfileModal: FC<ProfileModalProps> = ({ open, onClose }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // fetch photo when reload website
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get<UserResponse>("http://localhost:7000/api/v1.0.0/users/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // make sure that token name in data is same for photo url
        setImageSrc(res.data.image); 
      } catch (error) {
        console.error(" error fetching user data   :", error);
      }
    };

    fetchUserData();
  }, []);

  // upload to cloudinary
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vpvajzyt"); 

    try {
      // Cloudinary
      const res = await axios.post<CloudinaryResponse>(
        "https://api.cloudinary.com/v1_1/ds15utsvr/image/upload",
        formData
      );
      const url = res.data.secure_url;
      setImageSrc(url); //save url in front

      // send url to backend
      await axios.post(
        "http://localhost:7000/api/v1.0.0/users/me",
        { image: url },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      onClose();
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <>
     {/* show photo if exit */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="profile"
          style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
        />
      )}

    {/* loading */}
      {open && (
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
              onClick={onClose}
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
