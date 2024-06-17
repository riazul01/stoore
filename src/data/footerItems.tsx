import { ReactNode } from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

interface FooterItem {
  subheader: string;
  items: {
    name: string;
    link: string;
    icon?: ReactNode;
  }[];
}

interface Footer {
  navigation: FooterItem;
  quickLinks: FooterItem;
  information: FooterItem;
  socialLinks: FooterItem;
}

const footerItems: Footer = {
  navigation: {
    subheader: "Navigation",
    items: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Groeries",
        link: "#!",
      },
      {
        name: "Top Selling",
        link: "#!",
      },
      {
        name: "Recent Products",
        link: "#!",
      },
      {
        name: "Popular now",
        link: "#!",
      },
    ],
  },
  quickLinks: {
    subheader: "Quick Links",
    items: [
      {
        name: "My Account",
        link: "#!",
      },
      {
        name: "Become an Affilate",
        link: "#!",
      },
      {
        name: "Track Orders",
        link: "#!",
      },
      {
        name: "New Offers",
        link: "#!",
      },
      {
        name: "Latest Blogs",
        link: "#!",
      },
    ],
  },
  information: {
    subheader: "Information",
    items: [
      {
        name: "About Us",
        link: "#!",
      },
      {
        name: "Help Center",
        link: "#!",
      },
      {
        name: "Shipping & Delivery",
        link: "#!",
      },
      {
        name: "Refund Policy",
        link: "#!",
      },
      {
        name: "FAQ'S",
        link: "#!",
      },
    ],
  },
  socialLinks: {
    subheader: "Social Links",
    items: [
      {
        name: "Facebook",
        link: "#!",
        icon: <FaFacebookF/>,
      },
      {
        name: "Instagram",
        link: "#!",
        icon: <BsInstagram/>,
      },
      {
        name: "LinkedIn",
        link: "#!",
        icon: <BsLinkedin/>,
      },
      {
        name: "Twitter",
        link: "#!",
        icon: <BsTwitter/>,
      },
      {
        name: "Youtube",
        link: "#!",
        icon: <BsYoutube/>,
      },
    ],
  },
};

export default footerItems;
