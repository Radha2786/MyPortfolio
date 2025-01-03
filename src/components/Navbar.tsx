"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="Home" href="/home">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About" href="/about">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Skills" href="/skills">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Work" href="/work">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects" href="/projects">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Experience" href="/experience">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
       
      </Menu>
    </div>
  );
}

export default Navbar
