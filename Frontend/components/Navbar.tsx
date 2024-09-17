"use client";
import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Input,
} from "@nextui-org/react";

import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Nav onMenuOpenChange={setIsMenuOpen} maxWidth="full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
              src={"/images/logo.svg"}
              height={200}
              width={200}
              className="size-28"
              alt="logo"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href="/" aria-current="page">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/recipes" color="foreground">
              Recipes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Add Recipes
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <>
            <Button
              onPress={onOpen}
              className="lg:inline-flex hidden  z-0 group relative  items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
              type="button"
            >
              <CiSearch
                size={20}
                className="text-base text-default-400 pointer-events-none flex-shrink-0"
              />
              Quick Search...
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="center"
              hideCloseButton
              className="overflow-hidden"
              classNames={{
                header: "p-0",
              }}
              scrollBehavior="inside"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader>
                      {/* <Input
                          label="Search"
                          isClearable
                          radius="lg"
                          classNames={{
                            label: "text-black/50 dark:text-white/90 text-md",
                            input: [
                              "bg-transparent",
                              "text-black/90 dark:text-white/90",
                              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                              "shadow-xl",
                              "bg-default-200/50",
                              "dark:bg-default/60",
                              "backdrop-blur-xl",
                              "backdrop-saturate-200",
                              "hover:bg-default-200/70",
                              "dark:hover:bg-default/70",
                              "group-data-[focus=true]:bg-default-200/50",
                              "dark:group-data-[focus=true]:bg-default/60",
                              "!cursor-text",
                              
                            ],
                          }}
                          placeholder="Type to search..."
                          startContent={
                            <CiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                          }
                        /> */}
                      <Input
                        type="text"
                        variant={"flat"}
                        size="lg"
                        isClearable={true}
                        radius="none"
                        placeholder="Search your recipes..."
                        startContent={
                          <CiSearch
                            size={30}
                            className="text-base text-default-400 pointer-events-none flex-shrink-0"
                          />
                        }
                      />
                    </ModalHeader>
                    <ModalBody className="" data-lenis-prevent>
                      <p className="text-default-600">Recent</p>

                      {Array.from({ length: 10 }).map((_num, index) => (
                        <div
                          className="flex flex-row gap-3 items-center"
                          key={index}
                        >
                          <Image
                            src={
                              "https://plus.unsplash.com/premium_photo-1723464003582-df09ab4ad03d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            height={200}
                            width={200}
                            alt="img"
                            className="size-16 rounded-full"
                          />
                          <h1 className="line-clamp-2 font-medium">
                            Garlic Prawns (Shrimp) Garlic Prawns (Shrimp) Garlic
                            Prawns (Shrimp) Garlic Prawns (Shrimp)
                          </h1>
                        </div>
                      ))}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
          <Button
            onPress={onOpen}
            isIconOnly
            className="lg:hidden bg-transparent transition-opacity p-1 hover:opacity-80 rounded-full cursor-pointer  outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
          >
            <CiSearch
              size={28}
              className="mt-px text-default-600 dark:text-default-500"
            />
          </Button>

          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Nav>
    </>
  );
};

export default Navbar;
