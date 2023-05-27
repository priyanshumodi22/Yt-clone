import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RxCounterClockwiseClock} from "react-icons/rx";
import { RiVideoLine } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import { RiFeedbackLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { BsBroadcast } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Subscriptions", icon: <BsCollectionPlay />, type: "category"},
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category", divider: true},
  { name: "Live", icon: <BsBroadcast/>, type: "category" },
  { name: "Library", icon: <MdOutlineVideoLibrary />, type: "category" },
  { name: "History", icon: <RxCounterClockwiseClock />, type: "category" },
  { name: "Your videos", icon: <RiVideoLine />, type: "category" },
  { name: "Watch later", icon: <BsClock />, type: "category" },
  { name: "Downloads", icon: <HiDownload />, type: "category", divider: true},
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
