import React, { FC, ReactNode, useState } from "react";
import SideBar from "../../sideBar";
import Header from "../../../header/Header";

interface LayoutProps{
    children : ReactNode,
    setDarkMode: (val: boolean) => void,
    darkMode: boolean
}

const LayoutDashboard : FC <LayoutProps>=({children, setDarkMode, darkMode}) =>{
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex h-screen">
                <SideBar open={open} setOpen={setOpen} />
                <div
                  className="flex flex-col flex-1"
                  style={{
                    marginLeft: open ? '255px' : '40px',
                    transition: 'margin-left 0.3s',
                  }}
                >
                    <Header setDarkMode={setDarkMode} darkMode={darkMode} />
                    <main className="flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
export default LayoutDashboard;