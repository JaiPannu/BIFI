import EventCard from "@/components/EventCard";

function Events() {
  return (
    <div className="w-full h-full px-6  sm:px-20 mt-5 flex flex-col gap-10 items-center justify-center">
      <div className="font-montserrat font-bold text-4xl text-gold">Events</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center  gap-y-5 w-full ">
        {Array.from({ length: 7 }).map((_, i) => (
          <EventCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Events;
