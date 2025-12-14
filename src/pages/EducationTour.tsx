import { Calendar, MapPin, Heart, Image as ImageIcon } from 'lucide-react';
import DayCard from '../components/DayCard';

export default function EducationTour() {
  const days = [
    {
      day: 1,
      title: "Travel Day: Davao to Cebu",
      date: "November 19, 2025",
      activities: [
        {
          place: "Lapu-Lapu Mactan",
          description: "Our first stop in Cebu, exploring the historic monument and learning about Filipino heritage.",
          image: new URL('../images/day1-lapu-lapu.jpg', import.meta.url).href
        },
        {
          place: "SOMAC Buffet",
          description: "Enjoyed a delicious buffet lunch, experiencing local Cebuano cuisine.",
          image: new URL('../images/day1-somac.jpg', import.meta.url).href
        },
        {
          place: "WorldTech Information Solutions Inc.",
          description: "I was inspired by our facilitator, Ms. Elizabeth Arquiza, a woman who is very dedicated to IT, specifically cybersecurity.",
          image: new URL('../images/day1-worldtech.jpg', import.meta.url).href
        },
        {
          place: "Cebu Central",
          description: "Wandered around Cebu Central where there are many Sto. Niños.",
          image: new URL('../images/day1-cebu-central.jpg', import.meta.url).href
        }
      ]
    },
    {
      day: 2,
      title: "Cebu City Exploration",
      date: "November 20, 2025",
      activities: [
        {
          place: "Bai Hotel Morning View",
          description: "Peaceful sunrise and ocean view from our hotel room.",
          image: new URL('../images/day2-bai-hotel.jpg', import.meta.url).href
        },
        {
          place: "Rivan IT Cebu",
          description: "Inspired by Mr. Vincent Victor’s journey in the IT industry.",
          image: new URL('../images/day2-rivan-it.jpg', import.meta.url).href
        },
        {
          place: "Buffet 101",
          description: "Enjoyed lunch with classmates.",
          image: new URL('../images/day2-buffet101.jpg', import.meta.url).href
        },
        {
          place: "CIT-University",
          description: "Met the CPO of CodeChum and learned about his coding journey.",
          image: new URL('../images/day2-cit-university.jpg', import.meta.url).href
        },
        {
          place: "Cebu City Pari-an",
          description: "Explored Cebu’s historic district.",
          image: new URL('../images/day2-parian.jpg', import.meta.url).href
        }
      ]
    },
    {
      day: 3,
      title: "Mandaue to Bohol",
      date: "November 21, 2025",
      activities: [
        {
          place: "Mata Technologies, Inc.",
          description: "Experienced VR and immersive technology.",
          image: new URL('../images/day3-mata-tech.jpg', import.meta.url).href
        },
        {
          place: "Plaza Sugbo / City Hall",
          description: "Donation activity for the community.",
          image: new URL('../images/day3-plaza-sugbo.jpg', import.meta.url).href
        },
        {
          place: "Supercat Ferry",
          description: "Travel to Tagbilaran City.",
          image: new URL('../images/day3-supercat.jpg', import.meta.url).href
        },
        {
          place: "Alona Beach",
          description: "Relaxing night by the seaside.",
          image: new URL('../images/day3-alona-beach.jpg', import.meta.url).href
        }
      ]
    },
    {
      day: 4,
      title: "Bohol Tour & Return to Davao",
      date: "November 22, 2025",
      activities: [
        {
          place: "T.A.R.S.I.E.R Conservation Area",
          description: "Learned how technology helps protect endangered species.",
          image: new URL('../images/day4-tarsier-conservation.jpg', import.meta.url).href
        },
        {
          place: "Chocolate Hills",
          description: "Breathtaking natural attraction.",
          image: new URL('../images/day4-chocolate-hills.jpg', import.meta.url).href
        },
        {
          place: "Man-made Forest",
          description: "Saw tarsiers in their natural habitat.",
          image: new URL('../images/day4-tarsier-forest.jpg', import.meta.url).href
        },
        {
          place: "Loboc River",
          description: "Floating restaurant lunch experience.",
          image: new URL('../images/day4-loboc-river.jpg', import.meta.url).href
        },
        {
          place: "Mirror of the World",
          description: "Fun photo moments with world landmarks.",
          image: new URL('../images/day4-mirror-world.jpg', import.meta.url).href
        },
        {
          place: "Return Home",
          description: "Flight back to Davao.",
          image: new URL('../images/day4-airport.jpg', import.meta.url).href
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Education Tour</h1>
        <p className="mt-4 flex justify-center gap-4">
          <MapPin /> Cebu to Bohol
          <Calendar /> Nov 19–22, 2025
        </p>
      </div>

      <div className="space-y-8">
        {days.map(day => (
          <DayCard key={day.day} {...day} />
        ))}
      </div>
    </div>
  );
}
