import { useState, useEffect } from "react";
import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_METTS = [
  {
    id: "m1",
    title: "Fluturi",
    image:
      "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    address: "La miezul nopti a cazut o lebada",
  },
  {
    id: "m2",
    title: "Pisisci",
    image:
      "https://images.unsplash.com/photo-1643861707106-5ed1e3c52a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "La miezul nopti a cazut o pisica",
  },
  {
    id: "m3",
    title: "Caini",
    image:
      "https://images.unsplash.com/photo-1643821767977-942970645597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    address: "La miezul nopti a cazut un caine",
  },
];

function HomePage(props) {
  const [loadedMeetup, setLoadedMeetup] = useState([]);
  useEffect(() => {
    setLoadedMeetup(DUMMY_METTS);
  }, []);
  return <MeetUpList meetups={loadedMeetup} />;
}
export async function getStaticProps() {
  //fetch data from an Api
  return {
    props: {
      meetups: DUMMY_METTS,
    },
  };
}
export default HomePage;
