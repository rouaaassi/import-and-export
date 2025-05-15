import { Box, Button, Card, Typography } from "@mui/material";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import React, { FC } from "react";
// import EmailIcon from '@mui/icons-material/Email';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';
const AppSectionData = [
    {
      text: 'Send packages easily',
      icon: <PhonelinkIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
    {
      text: 'Parcel tracking, Facilitating the shipping process',
      icon: <TelegramIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
    {
      text: 'Ability to interact with the service',
      icon: <ChatBubbleIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
    {
      text: 'Monitoring ongoing shipments',
      icon: <VpnLockIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
  ];
const CustomerApp :FC = ()=>{
    return(
        <>
        {/* main */}
        <Box sx={{  width: "100%",
                minHeight: "80vh",
                position: "relative",
                bgcolor: "#ff",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                flexDirection:"row",
                boxShadow: '0 8px 32px rgba(1,24,216,0.10)'}}>
{/* left side */}
                  <Box>
{/* header */}
                    <Box sx={{display:"flex",flexDirection:"row", gap:3, mb:4 ,pl:8, py:5}}>
                    <PhonelinkIcon sx={{color:"#0118D8",width:"80px",height:"90px",textShadow: '0 4px 16px #bfcfff'}}/>
                    <Box sx={{display:'flex',flexDirection:"column",gap:2}}>
          <Typography sx={{color:"#0118D8" , fontWeight:700,fontSize:'50px',lineHeight:"100%", textShadow: '0 4px 16px #bfcfff'}} >Customer App</Typography>
          <Typography sx={{fontWeight:400,fontSize:'22px', color:'#222', textShadow: '0 2px 8px #e3e9f7'}}>This application helps you choose the nearest center.</Typography>
          </Box>
          </Box>
          {/* card */}
          <Box sx={{
            bgcolor: "#E6F0FF",
            borderRadius: 5,
            boxShadow: 2,
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            width: '470px',
            minWidth: '60px',
            alignItems: 'flex-start',
            ml: 0
          }}>
            {AppSectionData.map((data, index) => (
              <Card
                key={index}
                sx={{
                  bgcolor: "#fff",
                  color: "#222",
                  p: 3,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 2.5,
                  borderRadius: "10px",
                  width: "540px",
                  height: "70px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: '18px',
                  boxShadow: 6,
                  position: 'relative',
                  left: '40px',
                  mb: 3,
                  mt:3,
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: 12, bgcolor: '#f0f4ff' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 40 }}>
                  {data.icon}
                </Box>
                <Typography sx={{ ml: 2 }}>{data.text}</Typography>
              </Card>
            ))}
          </Box>
          </Box>
          <Box sx={{display:'flex',flexDirection:"column", gap :4}}>
          <Box sx={{ml:"100px"}}>
            <img src='/app2.png' style={{width :'420px',height:'520px'}}/>
          </Box>
          <Box >
            <Typography sx={{fontWeight:400, fontSize:"20px", lineHeight:'100%'}}>Enjoy a seamless, integrated experience with our customer-friendly<br/> app for tracking shipments, and communicating instantly.</Typography>
            <Typography sx={{color:"#0118D8" , fontWeight:700,fontSize:'30px',lineHeight:"100%", textShadow: '0 4px 16px #bfcfff' ,pt:2}}>Download the App</Typography>
            <Typography> <span style={{color:"#d53434",cursor:"pointer"}}>Click here</span>  to download the employee app</Typography>
            <Box sx={{display:'flex', gap:4, mt:2}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                  <Typography sx={{ fontSize: 11, color: '#888', mb: 0.5, fontWeight: 500 }}>13Download</Typography>
                  <Button
                    startIcon={<img src="/play.png" style={{width:'28px', height:'28px', marginRight: 4}} alt="App Store" />}
                    sx={{
                      textTransform:'none',
                      color:"#222",
                      borderRadius:'18px',
                      border:"2px solid #0118D8",
                      fontWeight: 600,
                      fontSize: 18,
                      px: 3,
                      py: 1.5,
                      minWidth: 170,
                      bgcolor: '#fff',
                      boxShadow: '0 2px 8px rgba(1,24,216,0.07)',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: '#f0f4ff',
                        boxShadow: '0 4px 16px #bfcfff',
                        borderColor: '#0035cc',
                      },
                    }}
                  >
                    App Store
                  </Button>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                  <Typography sx={{ fontSize: 11, color: '#888', mb: 0.5, fontWeight: 500 }}>@Https://App.com</Typography>
                  <Button
                    startIcon={<img src="/google.png" style={{width:'28px', height:'28px', marginRight: 4}} alt="Google Play" />}
                    sx={{
                      textTransform:'none',
                      color:"#222",
                      borderRadius:'18px',
                      border:"2px solid #0118D8",
                      fontWeight: 600,
                      fontSize: 18,
                      px: 3,
                      py: 1.5,
                      minWidth: 170,
                      bgcolor: '#fff',
                      boxShadow: '0 2px 8px rgba(1,24,216,0.07)',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: '#f0f4ff',
                        boxShadow: '0 4px 16px #bfcfff',
                        borderColor: '#0035cc',
                      },
                    }}
                  >
                    Google Play
                  </Button>
                </Box>
            </Box>
          </Box>
          </Box>
        </Box>
        </>
    )
}
export default CustomerApp;