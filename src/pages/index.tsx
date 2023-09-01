import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Video from "../components/video"
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="bg-bs-pink h-[100vh] w-full block">
        <Video videoSrcURL="./videos/hero-video.mp4" />
      </div>
      <h1 className="text-bs-dark">Look ma, no hands!</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
