"use client";
import AuthScreen from "@/screens/AuthScreen";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import {CgProfile} from 'react-icons/cg'
const ProfileDropdown = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-4">
      {signedIn ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile actions"
            variant="flat">
            <DropdownItem
              key="profile"
              className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">support@akh.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="all_orders">All Orders</DropdownItem>
            <DropdownItem key="team-settings">
              apply for seller account{" "}
            </DropdownItem>
            <DropdownItem
              color="danger"
              key="logout">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <CgProfile className="text-2xl cursor-pointer" onClick={()=>setOpen(!open)}/>
      )}
              {open && <AuthScreen setOpen={setOpen}/>}

    </div>
  );
};

export default ProfileDropdown;
