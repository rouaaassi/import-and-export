import axios from 'axios';
import ServiceCenter from '../routes/service-center';
import { IServiceCenterDetails } from '../../types/service_center';

// Get all service centers
export const getServiceCenters = async () => {
    return await axios.get(ServiceCenter.Get_Service_Centers);
};

// Add a new service center
export const addServiceCenter = async (serviceCenterData: Omit<IServiceCenterDetails, 'id'>) => {
    return await axios.post(ServiceCenter.Add_Service_Center, serviceCenterData);
};

// Edit an existing service center
export const editServiceCenter = async (id: string, serviceCenterData: Partial<IServiceCenterDetails>) => {
    return await axios.put(`${ServiceCenter.Edit_Service_Center}/${id}`, serviceCenterData);
};

// Delete a service center
export const deleteServiceCenter = async (id: string) => {
    return await axios.delete(`${ServiceCenter.Delete_Service_Center}/${id}`);
};

