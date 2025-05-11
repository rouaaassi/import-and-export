import { Paper, Typography } from "@mui/material";

const AddressCard = ({
    icon,
    label,
    address,
}: {
    icon: React.ReactNode;
    label: string;
    address: string;
}) => (
    <Paper
        variant="outlined"
        sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '30px',
            padding: '10px 16px',
            gap: 1.5,
            borderColor: '#BFE5FF',
            width: '100%',
        }}
    >
        {icon}
        <Typography sx={{ fontWeight: 'bold' }}>{label}</Typography>
        <Typography sx={{ color: '#999' }}>{address}</Typography>
    </Paper>
);
export default AddressCard;
