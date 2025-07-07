import { ReactNode } from "react"

export type IParcelsDetails ={
    id :number
    customerName : string
    serviceCenter: string 
    destination: string
    weight: string 
    date: Date
    status : ReactNode
    Actions ?: boolean
}