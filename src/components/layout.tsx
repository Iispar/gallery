"use client";
import { useState } from "react";
import Header from "./header";

export default function Layout({ children }) {
  const [drowpDown, setdropDown] = useState<boolean>(false)
    const handleDropdown = () => {
        setdropDown(!drowpDown)
    }
    return (
        <>
            <div className="fixed w-full z-10">
                <Header dropDown={drowpDown} handleDropdown={handleDropdown} />
            </div> 
            {children}
        </>
    )
}