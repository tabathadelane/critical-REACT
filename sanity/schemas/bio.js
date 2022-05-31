// import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  name: "bio",
  title: "Character bios",
  type: "document",
  icon: () => "🧙🏻",
  // icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "What is their name?",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    // {
    //   name: "remembrance",
    //   title: "Remembrance",
    //   type: "boolean",
    //   description: "Is this a bio in their memory?",
    //   validation: (Rule) => Rule.required(),
    //   initalValue: false,
    //   layout: "checkbox",
    // },
    {
      name: "race",
      title: "Race",
      type: "string",
      description: "What is their race?",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "class",
      title: "Class",
      type: "string",
      description: "What is their class(es)?",
      options: {
        list: [
          { value: "barbarian", title: "Barbarian" },
          { value: "bard", title: "Bard" },
          { value: "cleric", title: "Cleric" },
          { value: "druid", title: "Druid" },
          { value: "fighter", title: "Fighter" },
          { value: "monk", title: "Monk" },
          { value: "paladin", title: "Paladin" },
          { value: "ranger", title: "Ranger" },
          { value: "rogue", title: "Rogue" },
          { value: "sorcerer", title: "Sorcerer" },
          { value: "warlock", title: "Warlock" },
          { value: "wizard", title: "Wizard" },
          { value: "artificer", title: "Artificer" },
          { value: "bloodhunter", title: "Blood hunter" },
        ],
      },
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "subclass",
      title: "Sub class",
      type: "string",
      description: "What is their class specialty?",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "What is their title within the party?",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "interests",
      title: "Interests",
      type: "string",
      description: "What is their favorite things?",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description: "Tell me about them.",
      validation: (Rule) => Rule.max(500),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
