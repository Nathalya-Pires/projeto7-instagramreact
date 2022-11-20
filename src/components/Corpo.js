import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"

export default function Corpo() {
  return (
    <div class="desktop-corpo">
      <div class="feed">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  )
}