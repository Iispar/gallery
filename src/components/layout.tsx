"use client";
import { useState } from "react";
import Header from "./header";

export default function Layout({ children }: {children: unknown}) {
  const [dropdown, setdropdown] = useState<boolean>(false)
    const handleDropdown = () => {
        setdropdown(!dropdown)
    }
    return (
        <>
            <div className="fixed w-full z-1">
                <Header dropdown={dropdown} handleDropdown={handleDropdown} />
            </div> 
            {children}
        </>
    )
}