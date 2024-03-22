import { Flex, Card, Box, Avatar, Text, Button, IconButton } from "@radix-ui/themes"
import { BookmarkIcon, ChatBubbleIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import { CommentBox } from "@/components/ui/commentbox"

export default function Article(params) {
    const router = useRouter()
    const [read, setRead] = useState({})
    const readBlog = useRef()
    const blogID = router.query.slug;
    console.log(blogID)

    useEffect(()=>{
        async function fetBlogById() {
          if (blogID) {
            const fet = await fetch(`http://localhost:8000/apiv1/filter-blog-by-blogId/${blogID}`)
            const res = await fet.json()
            console.log(res.filteredByBlogId[0].author[0].username)
            console.log(res.filteredByBlogId[0])
            setRead(res.filteredByBlogId[0])
            readBlog.current.innerHTML = res.filteredByBlogId[0].blog     
          }
        }
        fetBlogById() 
    }, [blogID])

        return (
            <>
                <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h1>{read.title}</h1>
                    <Card style={{ padding: '8px', width: "80%"}}>
                        <Flex align="center" justify="between">
                            <Flex gap="4" align="center">
                            <Avatar
                                size="3"
                                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                radius="full"
                                fallback="T"
                            />
                            <Box>
                                <Text as="div" size="2" weight="bold">
                                  {read.author != undefined ? read.author[0].username : " "}
                                </Text>
                                <Text as="div" size="2" color="gray">
                                {read.author != undefined ? read.author[0].designation : " "}
                                </Text>
                            </Box>
                            <Button size="1" variant="outline">Follow</Button>
                            </Flex>
    
                            <Flex gap="3" align="center">
                            <IconButton variant="surface" radius="full">
                                <BookmarkIcon width="20" height="20" />
                            </IconButton>
                            <Flex align="center" gap="2">
                                <CommentBox/>
                                <Text as="div" size="2" color="violet">
                                    12
                                </Text>
                            </Flex>
                            </Flex>
                        </Flex>
                    </Card>
                    <div ref={readBlog} style={{maxWidth: "85%", marginTop: 30}}>
        
                    </div>
                </section>
            <Footer/>
            </>
        )
    
}