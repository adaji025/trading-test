"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Globe, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "../svg";
import { MobileDrawer } from "../mobile-drawer";
import Image from "next/image";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <div className="w-full bg-foreground border-b rounded-b-xl border-[#2D3134]">
      <div className="flex items-center justify-between px-2 md:px-6 py-3">
        {/* Left Navigation */}
        <div className="flex items-center">
          {/* Menu Icon for Medium Screens - Opens Drawer */}

          {/* Mobile Drawer */}
          <MobileDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />

          {/* Full Navigation for XL Screens */}
          <div className="hidden xl:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-xs text-emerald-400 font-medium hover:bg-custom-emerald hover:text-white transition-colors">
                      Perps
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-xs text-custom-light hover:bg-custom-emerald hover:text-white transition-colors">
                      Spots
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-xs text-custom-light hover:bg-custom-emerald hover:text-white transition-colors">
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Markets Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-custom-light hover:text-custom-light hover:bg-gray-800"
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">Markets</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-[#2D3134]">
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    className="text-custom-light hover:bg-gray-700 text-xs"
                  >
                    Crypto Markets
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    className="text-custom-light hover:bg-gray-700 text-xs"
                  >
                    Forex Markets
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Earn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-custom-light hover:text-custom-light hover:bg-gray-800"
                >
                  <div className="flex items-center space-x-1">
                    <Image src={"/b.svg"} height={24} width={24} alt="b" />
                    <span className="text-xs">Earn</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-[#2D3134]">
                <DropdownMenuItem className="text-custom-light hover:bg-gray-700 text-xs">
                  Staking
                </DropdownMenuItem>
                <DropdownMenuItem className="text-custom-light hover:bg-gray-700 text-xs">
                  Liquidity Mining
                </DropdownMenuItem>
                <DropdownMenuItem className="text-custom-light hover:bg-gray-700 text-xs">
                  Yield Farming
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Connect Button */}
          <button className="bg-custom-emerald rounded-full text-xs py-1.5 hover:bg-emerald-600 text-[#0E0E0E] hover:text-white font-semibold px-4 transition-colors duration-300">
            Connect
          </button>

          {/* Language/Region */}

          <div className="md:block text-white cursor-pointer">
            <Globe className="w-4 h-4" />
          </div>

          {/* Settings */}
          <div className="text-white cursor-pointer">
            <Settings className="w-4 h-4" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDrawerOpen(true)}
            className="text-white hover:text-custom-light hover:bg-gray-800 md:block xl:hidden"
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
