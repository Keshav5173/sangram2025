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
  aastha,
  anshika,
  arpan,
  ashish,
  chetan,
  ishika,
  keshav,
  rakesh,
  ruchi,
  rakshit,
  rupsha,
  sakshi,
  sayan,
  sayatani,
  shruti,
  shubham,
  stuti,
  sunanda,
  uttam,
  yogesh,
  akshit,
  sahil,
  khush,
  rounak,
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

const TeamData = [
  // Fest Chief
  {
    id: "1",
    Name: "Yogesh Tapadiya",
    Designation: "Fest Chief",
    instaLink: "https://www.instagram.com/kasamseyogestaparia?igsh=NXMzbTRha2JjaTZr",
    linkedIn: "https://www.linkedin.com/in/yogesh-taparia-a99513282",
    imgPath: yogesh
  },
  {
    id: "2",
    Name: "Akshit Thakur",
    Designation: "Fest Chief",
    instaLink: "https://www.instagram.com/__thakur__00002?igsh=MXhxZ3E0c294eDlzdw==",
    linkedIn: "https://www.linkedin.com/in/akshit-thakur-9922892a0",
    imgPath: akshit
  },

  // Technical Team
  {
    id: "3",
    Name: "Keshav Bhardwaj",
    Designation: "Technical Team",
    instaLink: "#",
    linkedIn: "https://www.linkedin.com/in/keshav-bhardwaj-369019287/",
    imgPath: keshav
  },

  // Design and Creativity
  {
    id: "4",
    Name: "Rakesh Bangra",
    Designation: "Design and Creativity",
    instaLink: "https://www.instagram.com/mr_incredible.tx/",
    linkedIn: "https://www.linkedin.com/in/rakesh-bangra-706b41286",
    imgPath: rakesh,
  },
  {
    id: "5",
    Name: "Rupsha Roy",
    Designation: "Design and Creativity",
    instaLink: "https://www.instagram.com/ghxstly_stvrs?igsh=dnp5OWo0cTRseXU=",
    linkedIn: "https://www.linkedin.com/in/rupsa-roy-487633287",
    imgPath: rupsha,
  },
  {
    id: "6",
    Name: "Sunanda Mondal",
    Designation: "Design and Creativity",
    instaLink: "https://www.instagram.com/__.sunandaaa.__/",
    linkedIn: "#",
    imgPath: sunanda,
  },

  // Logistics and Hospitality
  {
    id: "7",
    Name: "Ashish Jha",
    Designation: "Logistics and Hospitality",
    instaLink: "https://www.instagram.com/ismartashish2.0?igsh=MW1keDE5ZDFuMXI0dg==",
    linkedIn: "https://www.linkedin.com/in/ashish-kumar-jha-332a17288",
    imgPath: ashish,
  },

  // Sports Coordinators
  {
    id: "8",
    Name: "Sayan Mukherjee",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/sayan.nnnm?igsh=MThpdnVxaTN5cjJrag==",
    linkedIn: "#",
    imgPath: sayan
  },
  {
    id: "9",
    Name: "Sahil Mahto",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/saail._.7?igsh=MTZvNDlhZHJsZ2V4aA==",
    linkedIn: "#",
    imgPath: yogesh
  },
  {
    id: "10",
    Name: "Khush Joon",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/joon_18khush_?igsh=eHZxNnI2MDdheWo3&utm_source=qr",
    linkedIn: "https://www.linkedin.com/in/khush-joon-05b0742a8",
    imgPath: khush
  },
  {
    id: "11",
    Name: "Rounak Singh",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/rounak_singh_2?igsh=MWt3cGg2MWY2YmQ1cw==",
    linkedIn: "#",
    imgPath: rounak
  },
  {
    id: "12",
    Name: "Shruti Agarwal",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/shhrutiagrawal?igsh=MWVhd3llbzE1d2JqYQ==",
    linkedIn: "https://www.linkedin.com/in/shruti-agarwal-96730a2a8",
    imgPath: shruti
  },
  {
    id: "13",
    Name: "Sakshi Rani",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/sakshirani_9898?igsh=N3VpMHBmM3dhcnEy",
    linkedIn: "https://www.linkedin.com/in/sakshi-rani-982a88327",
    imgPath: sakshi
  },
  {
    id: "14",
    Name: "Ruchi Kumari",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/ruchi2102._?utm_source=qr&igsh=MWRrZHI0bThlaHltZQ==",
    linkedIn: "https://www.linkedin.com/in/ruchi-kumari-745a43329",
    imgPath: ruchi
  },
  {
    id: "15",
    Name: "Uttam Jangid",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/the_uttam_jangid?igsh=MWlmOWtwODBpMm44bw==",
    linkedIn: "https://www.linkedin.com/in/uttam-jangid-33595a268",
    imgPath: uttam
  },
  {
    id: "16",
    Name: "Chetan Yadav",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/chet.an_05?igsh=NG9hYzJrc3cyNmcz",
    linkedIn: "https://www.linkedin.com/in/chetan-yadav-b67173287",
    imgPath: chetan
  },
  {
    id: "17",
    Name: "Rakshit",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/_arpan__pramanik_?utm_source=qr&igsh=MTcyNWVoanlqYnNqdQ==",
    linkedIn: "#",
    imgPath: rakshit
  },
  {
    id: "18",
    Name: "Arpan Pramanik",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/_arpan__pramanik_?utm_source=qr&igsh=MTcyNWVoanlqYnNqdQ==",
    linkedIn: "#",
    imgPath: arpan
  },
  {
    id: "19",
    Name: "Sayatani Dey",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/sanjh_baati26/",
    linkedIn: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
    imgPath: sayatani
  },
  {
    id: "20",
    Name: "Stuti Modak",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/_._stuti._?igsh=aHVxaW84cGk4aWRs",
    linkedIn: "https://www.linkedin.com/in/stuti-modak-614584286",
    imgPath: stuti
  },
  {
    id: "21",
    Name: "Ishika Haldar",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/invalid_username.404/profilecard/?igsh=dW4xdDlpYzQyZzJ3",
    linkedIn: "https://www.linkedin.com/in/ishika-haldar-b11300289",
    imgPath: ishika,
  },
  {
    id: "22",
    Name: "Shubham Maity",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/duftvonruhe_sm03?igsh=MXJiYWRyOW03YnpkdQ==",
    linkedIn: "#",
    imgPath: shubham,
  },
  {
    id: "23",
    Name: "Aastha Sinha",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/aasthasinha195",
    linkedIn: "https://www.linkedin.com/in/aastha-sinha-21a4b5287",
    imgPath: aastha,
  },
  {
    id: "24",
    Name: "Anshika Gosh",
    Designation: "Sports Coordinator",
    instaLink: "https://www.instagram.com/its_ankshika_?igsh=endzcXJkZjhsYXY4",
    linkedIn: "https://www.linkedin.com/in/ankshika-ghosh-a7847a285",
    imgPath: anshika,
  }
];


export { events, TeamData };
