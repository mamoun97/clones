import { useEffect } from "react"
import AuthAnimation from "./components/auth-animation"
import LandingPage1 from "./components/landing-page1"
import DahboardOne from "./dashboard-one"
import InstagramClone from "./instagram-clone"
import FoodApp from "./food-app"
import AbsoluteSlider from "./components/absolute-slider"
import ProfileCardEffects from "./components/profile-card-effect"
import SliderCustom from "./components/slider-custom"
import GalleryAnimation from "./components/gallery-animation"
import Plan from "./components/plan"
import Swiper1 from "./components/swiper1"
import ListAnimation from "./components/list-animation"


function App() {

  const html = document.getElementById("html")
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "i") {
        event.preventDefault();
        if (html?.classList.contains("dark"))
          html.classList.remove("dark")
        else
          html?.classList.add("dark")
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>

      <div className="flex justify-center h-screen overflow-auto items-center no-scrollbar">

        <DahboardOne />
        {/* <SliderCustom /> */}
        {/* <ProfileCardEffects /> */}
        {/* <GalleryAnimation /> */}

        {/* <div className="m-4"><Plan /></div> */}
        {/* <Swiper1/> */}
        {/* <ListAnimation /> */}
        {/* <AuthAnimation/> */}
        {/* <LandingPage1 /> */}
        {/* <InstagramClone /> */}
        {/* <FoodApp /> */}
        {/* <AbsoluteSlider />   */}
      </div>
    </>
  )
}

export default App
