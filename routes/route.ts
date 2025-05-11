const PATH = {
    signup: '/signup',
    login: '/login',
    home: '/',
    ContactUs: '/contactus',
    dasboardstaff :'/staff-dashboard',
    parcels :'/parcels',
    parcels_Detail: (id:number) => `/parcels/${id}`,
};
export default PATH;