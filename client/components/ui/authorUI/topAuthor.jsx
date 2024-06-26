import { Card, Box, Avatar, Text, Flex, ScrollArea } from "@radix-ui/themes"
import { PersonIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { getauthors } from "@/redux/features/author/authorSlice";

export function TopAuthor() {
    const router = useRouter()
    const allAuthor = useSelector((state) => state.author.authors)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getauthors());
    },[])

    return (
        <section style={{ width: '33%', paddingRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Flex align="center" gap="3" justify="center">
                <h2>Top Authors</h2>
                <PersonIcon width="18" height="18" />
            </Flex>
            <Box>
            <Card style={{ width: 370 }}>
                <ScrollArea type="always" scrollbars="vertical" radius="full" size="1" style={{ height: 330 }}>
                    <Flex gap="2" direction="column" p='3'>
                        {
                            allAuthor?.users?.map((el, y) => (<Card key={y}>
                                <Flex gap="3" align="center" onClick={()=>{router.push(`/author/${el._id}`)}}>
                                    <Avatar
                                        size="2"
                                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                        radius="full"
                                        fallback="T"
                                    />
                                    <Box>
                                        <Text as="div" size="1" weight="bold">
                                            {el.username}
                                        </Text>
                                        <Text as="div" size="1" color="gray">
                                            {el.designation}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Card>))
                        }
                    </Flex>
                    </ScrollArea>
            </Card>
            </Box>
        </section>
    )
}