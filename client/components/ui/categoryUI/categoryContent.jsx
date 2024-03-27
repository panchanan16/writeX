import { Card, Text, Callout, ScrollArea, Flex, Inset, Box } from "@radix-ui/themes"
import { StopwatchIcon, Pencil2Icon, BackpackIcon } from "@radix-ui/react-icons"
import { getblogspercategory } from "@/redux/features/category/categorySlice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

function CategoryContent() {
    const dispatch = useDispatch()
    const { filteredCategory } = useSelector((state) => state.category.blogspercategory);
    const router = useRouter()
    const param = router.query.category

    useEffect(() => {
        dispatch(getblogspercategory(param))
    }, [param])

    return (
        <>


            <Callout.Root variant="outline" mt="5" style={{ maxWidth: 500 }}>
                <Flex align="center" gap="4">
                    <Callout.Text>
                        <Text as="div" size="3" weight="bold">{param}</Text>
                    </Callout.Text>
                    <Flex gap="1">
                        <Callout.Icon>
                            <BackpackIcon />
                        </Callout.Icon>
                        <Callout.Text>
                            {filteredCategory && filteredCategory.length} Articles
                        </Callout.Text>
                    </Flex>
                </Flex>
            </Callout.Root>
            <Flex style={{ flexWrap: "wrap", padding: 5, marginTop: 30, width: "90%" }} gap="7" align="center" justify="center">
                {
                    filteredCategory && filteredCategory.map((el) => (
                        <Card size="1" style={{ maxWidth: 240 }} key={el._id}>
                            <Flex direction="column" gap="0">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                        alt="Bold typography"
                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: 140,
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Text size="1">
                                    <Link href={`/page/${el._id}`} style={{ textDecoration: "none", color: "black" }}><h4>{el.title}</h4></Link>
                                </Text>
                                <Text size="1">
                                    {el.description.slice(0, 95).concat("....")}
                                </Text>

                                <Flex align="center" gap="4" style={{ marginTop: 10 }}>
                                    <Flex align="center" gap="1">
                                        <StopwatchIcon width="11" height="11" />
                                        <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                            oct 12
                                        </Text>
                                    </Flex>
                                    <Flex align="center" gap="1">
                                        <Pencil2Icon width="11" height="11" />
                                        <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                            Panchanan Deka
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Card>
                    ))
                }
            </Flex>
        </>
    )
}

export default CategoryContent