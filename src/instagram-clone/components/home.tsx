import Header from "./header";
import Posts from "./posts";
import Stories from "./stories";

export default function Home() {
  return (
    <div className="w-full">
      <Header/>
      <Stories/>
      <Posts/>
    </div>
  )
}
