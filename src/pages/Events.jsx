import { ThreeDCardDemo } from "../components/EventCard";
import {events} from "../constants/index.js"


export default function Event() {
  return (
    <div className="h-full w-screen bg-black p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {events.map(event => (
        <ThreeDCardDemo
          key={event.id}
          // imageUrl={`/EventsGallery/${event.title.toLowerCase().replace(/ /g, "")}.jpg`}
          name={event.title}
          slogan={event.slogan}
          imageUrl={event.icon}
          registerFormLink={event.onRegister}
        />
      ))}
    </div>
  </div>
  );
}


