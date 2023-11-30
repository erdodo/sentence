import Image from 'next/image'
import { Inter } from 'next/font/google'
import {ProfileButton, LanguageDropdown, Content, Header, Sidebar, Dropdown, Heading,MenuButton} from "@/fstp-ui";
import {
    MoleculeDropdownItemProps,
    MoleculeDropdownPlacement,
    MoleculeLanguageDropdownItemProps
} from "@/fstp-ui/src/models/molecules";
import {AtomIconsEnum, AtomIconsFlagEnum} from "@/fstp-ui/src/models/atoms";
import React from "react";
import {CommonTextColorsEnum} from "@/fstp-ui/src/models/common";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [languageItems, setLanguageItems] = React.useState<MoleculeLanguageDropdownItemProps[]>([
        {
            fText: "English",
            fIcon:AtomIconsFlagEnum.ENGLISH
        },
        {
            fText: "Türkçe",
            fIcon:AtomIconsFlagEnum.TURKISH
        }
    ]);
    const [profileItems, setProfileItems] = React.useState<MoleculeDropdownItemProps[]>([
            {
                fLabel: "Profile",
            },
            {
                fLabel: "Settings",
            },
            {
                fLabel: "Logout",
            }
        ]);

  return (

      <div>
        <Content>
          <Header>
              <div slot={"logo"}>
                  <Heading fLevel={"3"} fText={"SENTENCES"} fColor={CommonTextColorsEnum.PrimaryCore}></Heading>
              </div>
              <LanguageDropdown fItems={languageItems}></LanguageDropdown>
              <Dropdown fItems={profileItems}>
                <ProfileButton slot={"trigger"} fEmail={"personal@erdogan.com"} fName={"Erdoğan"} fInitials={"EY"} fHasName fHasStatus></ProfileButton>
              </Dropdown>
          </Header>
          <Sidebar>
                  <MenuButton  fIcon={AtomIconsEnum.GRID} fTooltip={"Class Room"}></MenuButton>
          </Sidebar>
        </Content>
      </div>
  )
}

