import { Slider } from "@/components/ui/slider"
import { PopularBlogs } from "@/components/ui/popular"
import { TopBlogger } from "@/components/ui/topblogger"
import { Flex } from "@radix-ui/themes"
import { RecentBlog } from "@/components/ui/recentblog"
import { Category } from "@/components/ui/categories"
import { Footer } from "@/components/ui/footer"


export default function Home() {
  return (
    <main>
      <Slider />
      <Flex align="baseline" gap='5' width="100%">
        <PopularBlogs />
        <TopBlogger />
      </Flex>
      <Flex align="baseline" gap='5' width="100%">
        <RecentBlog/>
        <Category/>
      </Flex>
    <Footer/>
    </main>
  )
}