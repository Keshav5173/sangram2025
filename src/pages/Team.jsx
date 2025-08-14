// import { Teamdata } from "../constants";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <main className="bg-black relative w-full h-full sm:px-16 px-6 sm:py-16 py-10 z-0">
      {/* <div className="mt-20 grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {Teamdata.map((service, index) => (
          <TeamCard key={service.title} index={index} {...service}>
            <p>Hello world</p>
          </TeamCard>
        ))}
      </div> */}
    </main>
    
  );
};

export default Team;