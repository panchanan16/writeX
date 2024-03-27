import { Card, Text, Callout, ScrollArea, Flex, Inset, Box } from "@radix-ui/themes"
import { useDispatch, useSelector } from "react-redux"
import { getcategories } from "@/redux/features/category/categorySlice"
import { useEffect } from "react"
import { useRouter } from "next/router"

function CategoryHeader() {
  const {allcategories} = useSelector((state)=> state.category.categories)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(getcategories())
  }, [])

  return (
    <>
      <Callout.Root variant="soft" color="jade">
        <ScrollArea scrollbars="horizontal">
          <Flex gap="3" p="2">
            {
              allcategories && allcategories?.map((ind, el) => (
                <Card asChild color="green" onClick={() => { router.push(`/category/${ind.category}`) }}>
                  <a href="#">
                    <Text as="div" size="1" weight="bold">
                      {ind.category}
                    </Text>
                  </a>
                </Card>
              ))
            }
          </Flex>
        </ScrollArea>
      </Callout.Root>
    </>
  )
}

export default CategoryHeader