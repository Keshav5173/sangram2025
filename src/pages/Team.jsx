import { TeamData } from "../constants";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <main className="bg-black relative w-full h-full sm:px-16 px-6 sm:py-16 py-10 z-0">
      <div className="mt-20 grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {TeamData.map((service) => (
          <TeamCard key={service.id} {...service} />
        ))}
      </div>
    </main>
    
  );
};

export default Team;