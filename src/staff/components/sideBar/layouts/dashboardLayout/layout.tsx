import React, { FC, ReactNode } from "react";
import SideBar from "../../sideBar";
import Header from "../../../header/Header";

interface LayoutProps{
    children : ReactNode
}

const LayoutDashboard : FC <LayoutProps>=({children}) =>{
    return (
        <>
            <div className="flex h-screen">
                <SideBar />
                <div className="flex flex-col flex-1">
                    <Header />
                    <main className="flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )

}
export default LayoutDashboard;