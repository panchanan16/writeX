import { Card, Callout, IconButton, Box, Avatar, Text, Flex, ScrollArea, Grid } from "@radix-ui/themes"
import { MagicWandIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { getcategories } from "@/redux/features/category/categorySlice"

export function TopCategory() {
    const router = useRouter()
    const {allcategories} = useSelector((state)=> state.category.categories)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getcategories())
    }, [])
    return (
        <section style={{ width: '33%', paddingRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
             <Flex align="center" gap="3" justify="center">
                <h2>Top Categories</h2>
                <MagicWandIcon width="18" height="18" />
            </Flex>
            <Box>
                <Card style={{ maxWidth: 370 }}>
                    <ScrollArea type="always" scrollbars="vertical" radius="full" size="1" style={{ height: 400 }}>
                        <Flex gap='2' style={{ flexWrap: "wrap", padding: 8 }}>
                            {
                                allcategories && allcategories?.map((ind, k) => (
                                    <Callout.Root key={k} size="1" onClick={()=>{router.push(`/category/${ind.category}`)}}>
                                        <Callout.Text style={{fontSize: 12}}>
                                           {ind.category}
                                        </Callout.Text>
                                    </Callout.Root>
                                ))
                            }
                        </Flex>
                    </ScrollArea>
                </Card>
            </Box>
        </section>
    )
}