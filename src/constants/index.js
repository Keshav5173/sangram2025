import {
  mobile,
  backend,
  creator,
  cricket,
  football,
  athletics,
  badminton,
  basketball,
  chess,
  tableTennis,
  lawnTennis,
  volleyBall,
  kabaddi,
  squash,
  BGMI,
  Valo,
  ClashRoyale
} from "../assets";

// import cricket from "../assets/Sports"




const events = [
  {
    id: "1",
    title: "Athletics",
    icon: athletics,
    category: " M / W",
    team: "solo",
    registerPath: "/create",
    detailsPath : "/athletics",
    slogan:"Feel the rush, break the limits",
    rulebook : "https://docs.google.com/document/d/1hpdCvuOOIIKdfpVg_OvUfncUCa-1jjvxH_17ouMgbuM/edit?usp=sharing"
    
  },
  {
    id: "2",
    title: "Badminton",
    icon: badminton,
    category: " M / W",
    team: "solo",
    registerPath: "/create",
    detailsPath : "/badminton",
    slogan:"Smash through the air, own the court",
    rulebook : "https://docs.google.com/document/d/1Tzaje2tfx-k45EhlagOg05VeIf7_8dPD-5mX5OviZPQ/edit"
  },
  {
    id: "3",
    title: "Basketball",
    icon: basketball,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/basketball",
    slogan:"Dribble, shoot, score!",
    rulebook : "https://docs.google.com/document/d/15uEwkB2WQ6eqbRQi0-nu5UerkaY0NQgIlq7hQCS-MC0/edit"
  },
  {
    id: "4",
    title: "Cricket",
    icon: cricket,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/cricket",
    slogan:"Swing the bat, aim for the stars",
    rulebook : "https://docs.google.com/document/d/1Lr06DBZFyvIltNJfO7s8BaGHhpH8-P_EhkjILbl8w4w/edit?usp=sharing"
  },
  {
    id: "5",
    title: "Football",
    icon: football,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/football",
    slogan:"Every kick, every pass, a step closer to glory",
    rulebook : "https://docs.google.com/document/d/1ZTMxBoSh5H0MTyPlUuoqGS-ljHu4ZR608DwNqgnCFp4/edit?usp=sharing"
  },
  {
    id: "6",
    title: "Table Tennis",
    icon: tableTennis,
    category: " M / W",
    team: "Doubles / Mixed",
    registerPath: "/create",
    detailsPath : "/table-tennis",
    slogan:"Quick reflexes, sharp spins",
    rulebook : "https://docs.google.com/document/d/1Xuwh-TVG3ocvORt7fsjf8hEBgAiKEbAPstWB5wjjO9M/edit"
  },
  {
    id: "7",
    title: "Lawn Tennis",
    icon: lawnTennis,
    category: " M / W",
    team: "doubles / mixed",
    registerPath: "/create",
    detailsPath : "/lawn-tennis",
    slogan:"Serve with power, rally with finesse",
    rulebook : "https://docs.google.com/document/d/1DVyrxxf8LkE-DBXiXcLo_x2jc-c-Ttv5ejettKglS0c/edit"
  },
  {
    id: "8",
    title: "Volleyball",
    icon: volleyBall,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/volleeyball",
    slogan:"Set high, spike hard",
    rulebook : "https://docs.google.com/document/d/1cXqK9reJz5RxBk4dFvAfonYfvXDu8_UgKJR-sp40l8w/edit"
  },
  {
    id: "9",
    title: "Kabaddi",
    icon: kabaddi,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/kabaddi",
    slogan:"Hold your breath, dive into the action",
    rulebook : "https://docs.google.com/document/d/1o1YxBRE7ereGwht9DeO1hTSZmOx-NuapIKZc7jA2WUo/edit?usp=sharing"
  },
  
  {
    id: "11",
    title: "Squash",
    icon: squash,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/squash",
    slogan:"Hit the walls, chase the ball",
    rulebook : "https://docs.google.com/document/d/1mUb5kpDqq27CrrEv0CcpziHXPq1vPkQvM3mJ-ZAvGUo/edit"
  },
  {
    id: "12",
    title: "Chess",
    icon: chess,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    detailsPath : "/chess",
    slogan:"Every move is a battle, every game a war",
    rulebook : "https://docs.google.com/document/d/1tg4M2JQ3cxCKQx5s4UeHYRjx1cAJX1X5/edit?usp=sharing&ouid=107039715337623165752&rtpof=true&sd=true"
  },
  {
    id: "13",
    title: "BGMI",
    icon: BGMI,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    team_id: [
      { value: "id1", label: "id1" },
      { value: "id2", label: "id2" },
      { value: "id3", label: "id3" },
      { value: "id4", label: "id4" },
    ],
    detailsPath : "/esports/bgmi",
    slogan:"Land, loot, survive",
    rulebook : "https://docs.google.com/document/d/1WZ-b7VMUYv_fqBv-Ey1sr5xFkbCNe2WC/edit?usp=drive_link"
  },
  {
    id: "14",
    title: "Valorant",
    icon: Valo,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    team_id: [
      { value: "id1", label: "id1" },
      { value: "id2", label: "id2" },
      { value: "id3", label: "id3" },
      { value: "id4", label: "id4" },
      { value: "id5", label: "id5" },
    ],
    detailsPath : "/esports/valorant",
    slogan:"Aim true, play smar",
    rulebook : "https://docs.google.com/document/d/1WcdUyHpr8osZnm2I4CQaNIGcq2sS5rZ0/edit?usp=drive_link"
  },
  {
    id: "15",
    title: "Clash Royale",
    icon: ClashRoyale,
    category: " M / W",
    team: "team",
    registerPath: "/create",
    team_id: [{ value: "id1", label: "id1" }],
    detailsPath : "/esports/clash-royale",
    slogan:"Deploy your troops, outthink your foes",
    rulebook : "https://docs.google.com/document/d/1_-32YCzpinbZ_kiKo6sjN2Cull2MvY6c/edit?usp=drive_link"
  },
];





export const eventOptions = [
  {
    value: "1",
    label: "Athletics",
    category: ["men", "women"],
    teamTypes: [
      "100m",
      "200m",
      "400m",
      "800m",
      "1500m",
      "5000m",
      "4x100m",
      "4x400m",
      "Long Jump",
      "Triple Jump",
      "High Jump",
      "Discuss Throw",
      "Javelin Throw",
      "Shot Put" 
    ],
  },
  {
    value: "2",
    label: "Badminton",
    category: ["men", "women", "mixed"],
    teamTypes: ["Team"],
  },
  {
    value: "3",
    label: "Basketball",
    category: ["men", "women"],
    teamTypes: ["Team"],
  },
  {
    value: "4",
    label: "Cricket",
    category: "men",
    teamTypes: ["Team"],
  },
  {
    value: "5",
    label: "Football",
    category: ["men", "women"],
    teamTypes: ["Team"],
  },
  {
    value: "6",
    label: "Table Tennis",
    category: ["men", "women"],
    teamTypes: ["Team"],
  },
  {
    value: "7",
    label: "Lawn Tennis",
    category: "men",
    teamTypes: ["Individual"],
  },
  {
    value: "8",
    label: "Volleyball",
    category: ["men", "women"],
    teamTypes: ["Team"],
  },
  {
    value: "9",
    label: "Kabaddi",
    category: ["men","women"],
    teamTypes: ["Team"],
  },
  // {
  //   value: "10",
  //   label: "Hockey",
  //   category: "men",
  //   teamTypes: ["Team"],
  // },
  {
    value: "11",
    label: "Squash",
    category: "men",
    teamTypes: ["Team"],
  },
  {
    value: "12",
    label: "Chess",
    category: "open",
    teamTypes: ["Blitz", "Classical"],
  },
  {
    value: "13",
    label: "BGMI",
    category: "open",
    teamTypes: ["Team"],
    team_id: [
      {
        labelText: "id1",
        labelFor: "id1",
        id: "id1",
        name: "id1",
        type: "text",
        autoComplete: "id1",
        isRequired: true,
        placeholder: " id1",
      },
      {
        labelText: "id2",
        labelFor: "id2",
        id: "id2",
        name: "id2",
        type: "text",
        autoComplete: "id2",
        isRequired: true,
        placeholder: " id2",
      },
      {
        labelText: "id3",
        labelFor: "id3",
        id: "id3",
        name: "id3",
        type: "text",
        autoComplete: "ID",
        isRequired: true,
        placeholder: " id3",
      },
      {
        labelText: "id4",
        labelFor: "id4",
        id: "id4",
        name: "id4",
        type: "text",
        autoComplete: "ID",
        isRequired: true,
        placeholder: " id4",
      },
    ],
  },
  {
    value: "14",
    label: "Valorant",
    category: "open",
    teamTypes: ["Team"],
    team_id: [
      {
        labelText: "id1",
        labelFor: "id1",
        id: "id1",
        name: "id1",
        type: "text",
        autoComplete: "id1",
        isRequired: true,
        placeholder: " id1",
      },
      {
        labelText: "id2",
        labelFor: "id2",
        id: "id2",
        name: "id2",
        type: "text",
        autoComplete: "id2",
        isRequired: true,
        placeholder: " id2",
      },
      {
        labelText: "id3",
        labelFor: "id3",
        id: "id3",
        name: "id3",
        type: "text",
        autoComplete: "ID",
        isRequired: true,
        placeholder: " id3",
      },
      {
        labelText: "id4",
        labelFor: "id4",
        id: "id4",
        name: "id4",
        type: "text",
        autoComplete: "ID",
        isRequired: true,
        placeholder: " id4",
      },
      {
        labelText: "id5",
        labelFor: "id5",
        id: "id5",
        name: "id5",
        type: "text",
        autoComplete: "ID",
        isRequired: true,
        placeholder: " id5",
      },
    ],
  },
  {
    value: "15",
    label: "Clash Royale",
    category: "open",
    teamTypes: ["Individual"],
    team_id: [
      {
        labelText: "id1",
        labelFor: "id1",
        id: "id1",
        name: "id1",
        type: "text",
        autoComplete: "ID",
        isRequired: true,
        placeholder: " id1",
      },
    ],
  },
];

export const categoryOptions = ["men", "women", "mixed", "open"];
export const teamTypeOptions = [
  "100m",
  "200m",
  "400m",
  "800m",
  "1500m",
  "5000m",
  "4x100m",
  "4x400m",
  "Team",
  "Individual",
  "Long Jump",
  "Triple Jump",
  "High Jump",
  "Discuss Throw",
  "Javelin Throw",
  "Shot Put" 
];

export { events };
