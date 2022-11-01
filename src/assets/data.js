import { AiFillHome } from "react-icons/ai";
import { BiRadio, BiChip, BiHeart } from "react-icons/bi";
import { BsBoxArrowRight, BsMusicNoteBeamed } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import {
  music1,
  music2,
  music3,
  album,
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
} from ".";

export const Navlinks = [
  {
    name: "home",
    icon: <AiFillHome size={25} />,
  },
  {
    name: "playlist",
    icon: <BsMusicNoteBeamed size={25} />,
  },
  {
    name: "radio",
    icon: <BiRadio size={25} />,
  },
  {
    name: "other",
    icon: <BiChip size={25} />,
  },
];

export const profileLink = [
  {
    name: "profile",
    icon: <IoPerson size={25} />,
  },
  {
    name: "logout",
    icon: <BsBoxArrowRight size={25} />,
  },
];

export const chartData = [
  {
    id: "ad1",
    img: music1,
    title: "Golden age of 80s",
    artist: "Sean Swodder",
    time: "2:15:45",
    icon: <BiHeart className="text-secondary" />,
    link: "album",
  },
  {
    id: "ad2",
    img: music2,
    title: "Reggae 'n' blues",
    artist: "DJ Yk mule",
    time: "1:23:32",
    icon: <BiHeart className="text-secondary" />,
    link: "album",
  },
  {
    id: "ad3",
    img: music3,
    title: "Tomorrow's tunes",
    artist: "Obi Datti",
    time: "1:23:32",
    icon: <BiHeart className="text-secondary" />,
    link: "album",
  },
];

export const albumData = [
  {
    img: album1,
    title: "Life 'n' Bubble",
  },
  {
    img: album2,
    title: "Mountain",
  },
  {
    img: album3,
    title: "Limit",
  },
  {
    img: album4,
    title: "Mountain",
  },
  {
    img: album5,
    title: "Mountain",
  },
  {
    img: album6,
    title: "Mountain",
  },
  {
    img: album3,
    title: "Limit",
  },
];
