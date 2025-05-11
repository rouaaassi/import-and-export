import axios from 'axios'
import EditParcel from '../routes/edit-parcel'

export const edit = async (editParcel:{Nname : string , parcels:string , pNumber : string ,location : string}) =>{
    return await axios.post(EditParcel.Edit_Parcel,editParcel)
}