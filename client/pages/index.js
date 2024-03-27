import { Slider } from "@/components/ui/slider"
import { PopularBlogs } from "@/components/ui/popular"
import { Flex } from "@radix-ui/themes"
import { RecentBlog } from "@/components/ui/recentblogUI/recentBlogs"
import { TopCategory } from "@/components/ui/categoryUI/topCategory"
import { Footer } from "@/components/ui/footer"
import { TopAuthor } from "@/components/ui/authorUI/topAuthor"


export default function Home() {
  return (
    <main>
      <Slider />
      <Flex align="baseline" gap='5' width="100%">
        <PopularBlogs />
        <TopAuthor />
      </Flex>
      <Flex align="baseline" gap='5' justify="between" style={{}}>
        <RecentBlog />
        <TopCategory />
      </Flex>
      <Footer />
    </main>
  )
}