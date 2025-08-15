import { CardBody, CardContainer, CardItem } from "./3d-card";
// import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
// import Link from "next/link"; // Commented out if not needed

export function ThreeDCardDemo({imageUrl,name,slogan,registerFormLink}) {
  
  const handleRegisterClick = () => {

    window.location.href = registerFormLink;
  };
  
  return (
 
    <CardContainer className="inter-var relative group">
        {/* Larger and more visible gradient */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
        <CardBody className="relative bg-zinc-900 group-hover:bg-opacity-90 rounded-xl p-6 border border-black/[0.1] dark:bg-black dark:border-white/[0.2] w-auto sm:w-[20rem] h-auto">
          <CardItem translateZ="50" className="text-xl font-bold text-gray-50 dark:text-white">
            {name}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-gray-100 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {slogan}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl}
              height="400"
              width="400"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" 
              onClick = {handleRegisterClick}>
              Register
            </CardItem> 
          </div>
        </CardBody>
      </CardContainer>

  );
}
