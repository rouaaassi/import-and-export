import { ReactNode } from "react"

export type ICentersList ={
    id :number
    ServiceCenterName : string
    location :string
    parcels : number 
    phoneNumber : string
    status : ReactNode
    Actions ?: boolean
}