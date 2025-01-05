"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const navLinks = [
    {
      title: "Home",
      path: "#hero",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Skills",
      path: "#skills",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Experience",
      path: "#experience",
    },
  ];

  return (
    <div
      className={cn("mt-1 top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        {navLinks.map((link, index) => (
          <MenuItem
            key={index}
            setActive={setActive}
            active={active}
            item={link.title}
            href={link.path}
          ></MenuItem>
        ))}
       
      </Menu>
    </div>
  );
}

export default Navbar
