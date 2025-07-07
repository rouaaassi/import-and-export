import { ReactNode } from "react"

export type IServiceCenter = {
    id: string;
    name: string;
    phone: string;
    address: string;
    services_offered: string;
    special_instructions: string;
    operating_hours: string;
    Actions?: boolean;
}

export type IServiceCenterDetails = {
    id: string;
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
    Actions?: boolean;
} 