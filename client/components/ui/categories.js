import { Card, Callout, IconButton, Box, Avatar, Text, Flex, ScrollArea, Grid } from "@radix-ui/themes"
import { MagicWandIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export function Category() {
    const [category, setcategory] = useState([])
    const router = useRouter()
    useEffect(()=>{
        async function getCat() {
           const fet = await fetch('http://localhost:8000/apiv1/all-category') 
           const res = await fet.json() 
           setcategory(res.allcategories)
        }
        getCat();
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
                                category?.map((ind, k) => (
                                    <Callout.Root key={ind} size="1" onClick={()=>{router.push(`/category/${ind.category}`)}}>
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