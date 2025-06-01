import { FC } from "react"
import RedeemIcon from '@mui/icons-material/Redeem';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PaidIcon from '@mui/icons-material/Paid';
const Content :FC =()=>{
    return(
        <>

        </>
    )
}

export const serviceCards = [
  {
    image: '/card1 (1).png',
    icon: <RedeemIcon sx={{ color: '#2196f3', fontSize: 32 }}/>,
    title: 'Seasonal offers and regular discounts',
    description: 'Regular offers and seasonal discounts give you more for less.'
  },
  {
    image: '/card2.png',
    icon: <PinDropIcon sx={{ color: '#2196f3', fontSize: 32 }}/>,
    title: 'Multiple service centers for easy access',
    description: 'Easy access to our widespread centers saves you time and increases transaction efficiency.'
  },
  {
    image: '/card3.png',
    icon:  <PaidIcon sx={{ color: '#2196f3', fontSize: 32 }}/>,
    title: 'Significantly reduced shipping costs',
    description: 'We offer competitive shipping rates that reduce costs without compromising quality.'
  }
];

export default Content;