
export interface Address {
  city: string;
  street: string;
  zip: string;
}

export interface OperatingHour {
  day: string;
  start: string;
  end: string;
}

export interface ServiceCenter {
  id?: string;
  name: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
  services_offered: string[];
  special_instructions: string;
  operating_hours: {
    day: string;
    start: string;
    end: string;
  }[];
}
