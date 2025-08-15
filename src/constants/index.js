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
  race_200m,
  race_400m,
  race_800m,
  badminton_solo,
  beach_football,
  discuss_throw,
  javlin_throw,
  long_jump,
  relay_100,
  relay_400,
  short_cricket,
  shot_put,
  table_tennis_duo,
  tug_of_war,
  throw_ball,
} from "../assets";

// import cricket from "../assets/Sports"




const events = [
  {
    id: "1",
    title: "Athletics 100M",
    icon: athletics,
    slogan:"Feel the rush, break the limits",
    onRegister: "https://forms.gle/Z6d6FAVXrU95bwL38"
    
  },
  {
    id:"2",
    title: "Athletics 200M",
    icon: race_200m,
    slogan: "200m of Pure Speed – Blink and You’ll Miss It!",
    onRegister: "https://forms.gle/ZXnqSm9X8Ne3qrse6",
  },
  {
    id:"3",
    title: "Athletics 400M",
    icon: race_400m,
    slogan: "400M – Where Speed Meets Endurance!",
    onRegister: "https://forms.gle/sbAHbFnKm11ab4PW9",
  },
  {
    id:"4",
    title: "Athletics 800M",
    icon: race_800m,
    slogan: "Go the Distance – Power, Pace, and Perseverance!",
    onRegister: "https://forms.gle/QYpb3kSmP4Um27YF7",
  },
  {
    id:"5",
    title: "Badminton solo",
    icon: badminton_solo,
    slogan: "Smash Your Limits, Chase Every Point!",
    onRegister: "https://forms.gle/QYpb3kSmP4Um27YF7",
  },
  {
    id:"6",
    title: "Badminton duo",
    icon: badminton,
    slogan: "Double the Players, Double the Power – Badminton Duo Dominance!",
    onRegister: "https://forms.gle/RZbbpyEYjfn7uzDH6",
  },
  {
    id: "7",
    title: "Basketball",
    icon: basketball,
    slogan: "Bounce, Pass, Score – Own the Court!",
    onRegister: "https://forms.gle/7W1HtcFQ5tVsua1f8",
  },
  {
    id: "8",
    title: "BEACH-FOOTBALL",
    icon: beach_football,
    slogan: "RIDE THE WAVES, RULE THE GAME!",
    onRegister: "https://forms.gle/jBLkMTUrhmzDRkyq9",
  },
  {
    id: "9",
    title: "CHESS",
    icon: chess,
    slogan: "THINK AHEAD, MOVE WITH PURPOSE!",
    onRegister: "https://forms.gle/hrgcVjT1jeHf4tfZ9",
  },
  {
    id: "10",
    title: "DISCUSS-THROW",
    icon: discuss_throw,
    slogan: "SPIN, RELEASE, AND CONQUER THE FIELD!",
    onRegister: "https://forms.gle/bcVzEFSZMPqNdL3x5",
  },
  
  {
    id: "11",
    title: "FOOTBALL",
    icon: football,
    slogan: "ONE TEAM, ONE DREAM, ONE GOAL!",
    onRegister: "https://forms.gle/d3X8z2hvCx86aR6h9",
  },
  {
    id: "12",
    title: "JAVLIN THROW",
    icon: javlin_throw,
    slogan: "AIM HIGH, THROW FAR, BREAK LIMITS!",
    onRegister: "https://forms.gle/diXzK6V11KrWDydz7",
  },
  {
    id: "13",
    title: "KABADDI",
    icon: kabaddi,
    slogan: "CHASE, DODGE, AND RULE THE MAT!",
    onRegister: "https://forms.gle/EWGMBFgLC7x6sTNW8",
  },
  {
    id: "14",
    title: "LONG JUMP",
    icon: long_jump,
    slogan: "FLY THROUGH THE AIR, LAND YOUR GLORY!",
    onRegister: "https://forms.gle/VRpXDNn9uMwthyBp7",
  },
  {
    id: "15",
    title: "RELAY 100*4",
    icon: relay_100,
    slogan: "PASS THE BATON, CHASE THE GLORY!",
    onRegister: "https://forms.gle/cw7tne2SRPXeU23m9",
  },
  {
    id: "16",
    title: "RELAY 400*4",
    icon: relay_400,
    slogan: "LONG RUNS, FAST PASSES, BIG WINS!",
    onRegister: "https://forms.gle/TeYG6iGHARTRAnLGA",
  },
  {
    id: "17",
    title: "SHORT CRICKET",
    icon: short_cricket,
    slogan: "BIG HITS, QUICK RUNS, INSTANT ACTION!",
    onRegister: "https://forms.gle/aDAU2L1UdXqn7W1RA",
  },
  {
    id: "18",
    title: "SHOT-PUT",
    icon: shot_put,
    slogan: "PUSH YOUR POWER, REACH NEW DISTANCE!",
    onRegister: "https://forms.gle/Rcw9ibpBDapL7TvT7",
  },
  {
    id: "19",
    title: "TABLE-TENNIS SOLO",
    icon: tableTennis,
    slogan: "FAST SERVES, SHARP RETURNS, TOTAL FOCUS!",
    onRegister: "https://forms.gle/SZGvEpwjM6cu5fqEA",
  },
  {
    id: "20",
    title: "TABLE-TENNIS DUO",
    icon: table_tennis_duo,
    slogan: "SYNC, SMASH, AND SCORE TOGETHER!",
    onRegister: "https://forms.gle/6MgE3camQtuuxDU19",
  },
  {
    id: "21",
    title: "THROW BALL",
    icon: throw_ball,
    slogan: "TOSS, BLOCK, AND CLAIM VICTORY!",
    onRegister: "https://forms.gle/aMqP45cLxcMz2ypRA",
  },
  {
    id: "22",
    title: "TUG OF WAR",
    icon: tug_of_war,
    slogan: "PULL WITH PRIDE, WIN WITH STRENGTH!",
    onRegister: "https://forms.gle/Npv9Cj5XQ1V4zsvC7",
  },
  {
    id: "23",
    title: "VOLLEYBALL",
    icon: volleyBall,
    slogan: "SET HIGH, SPIKE HARD, WIN BIG!",
    onRegister: "https://forms.gle/E5W1h2sDQbPiN8he8",
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
