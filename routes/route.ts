const PATH = {
    signup: '/signup',
    login: '/login',
    home: '/',
    ContactUs: '/contactus',
    dasboardstaff :'/staff-dashboard',
    parcels :'/parcels',
    parcels_Detail: (id:number) => `/parcels/${id}`,
    Users : '/staff-dashboard/users',
    Customers: '/staff-dashboard/customers',
    ServiceCenter :'/staff-dashboard/service-centers',
    Rating :'/staff-dashboard/rating',
};

export default PATH;