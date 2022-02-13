import Africa from "public/svg/components/continent/Africa";
import Asia from "public/svg/components/continent/Asia";
import Europe from "public/svg/components/continent/Europe";
import LatinAmerica from "public/svg/components/continent/LatinAmerica";
import NorthAmerica from "public/svg/components/continent/NorthAmerica";
import ThePacific from "public/svg/components/continent/ThePacific";

export const form = {
  profile: "Profile Username",
  profilePlaceholdar: "Profile Username",
  tooltipProfile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  continent: "Select continent",
  location: "location",
  locationPlaceholder: "Select continent location",
  button: "Plant your tree",
  continentArray: [
    { code: "01", name: "North America", icon: NorthAmerica },
    { code: "02", name: "Latin America", icon: LatinAmerica },
    { code: "03", name: "Africa", icon: Africa },
    { code: "04", name: "Asia", icon: Asia },
    { code: "05", name: "Europe", icon: Europe },
    { code: "06", name: "The Pacific", icon: ThePacific },
  ],
  places: {
    "01": ["United states", "Canada"],
    "02": [
      "Amazon Rainforest",
      "Andes",
      "Brazil",
      "Colombia",
      "Costa rica",
      "Guatemala",
      "Haiti",
      "Honduras",
      "Mangroves",
      "Mexico",
      "Peru",
    ],
    "03": [
      "Afr100",
      `Côte D'ivore`,
      "Ethiopia",
      "Ghana",
      "Kenya",
      "Malawi",
      "Rawanda",
      "Tanzania",
      "Uganda",
    ],
    "04": ["India", "Indonesia", "Mangroves", "Philippines", "Vietnam"],
    "05": ["Denmark", "Iceland", "Romania", "Spain", "United Kingdom"],
    "06": ["Australia", "New Zealand"],
  },
  multiProducts:{
    inputLabel:'Multiproduct',
    inputSwitch: 'Link all the items to the same profile',
    tooltipMultiProducts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  }
};
