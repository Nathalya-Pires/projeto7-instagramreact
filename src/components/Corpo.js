import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"

export default function Corpo() {
  return (
    <div className="desktop-corpo">
      <div className="feed">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  )
}