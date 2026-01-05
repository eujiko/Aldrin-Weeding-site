import Navbar from "./components/navbar";
import Landing from "./components/landing";
import OurStory from "./components/ourstory";
import WeddingDetails from "./components/weddingdetails";
import Memories from "./components/memories";
import RSVP from "./components/calendar";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <RSVP />
        <OurStory />
        <WeddingDetails />
        <Memories />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
