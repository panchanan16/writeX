import { LightningBoltIcon, StopwatchIcon, PersonIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { Flex, Grid, Box, Card, Text } from "@radix-ui/themes"

export function PopularBlogs() {
    return (
        <section style={{ paddingLeft: "40px", maxWidth: "67%" }}>
            <Flex align="center" gap="3">
                <h2>Trending Articles</h2>
                <LightningBoltIcon width="18" height="18" />
            </Flex>

            <Grid columns="3" gap="3" width="auto" pb="6" style={{ maxWidth: "100%" }}>
                {
                    [1,2,3,4,5,6].map((el, ind)=>(
                        <Box height="14" key={ind}>
                    <Card style={{ maxWidth: 350 }}>
                        <Flex direction="column" gap='1'>
                            <Text as="div" size="1" weight="bold">
                                Quick start how to grow your business with very low investment and efficient performance
                            </Text>
                            <Text as="div" color="gray" weight="medium" size="1" style={{ fontSize: "11px" }}>
                                Start building your next project in minutes lorem aqteid u  suus dowd oohdfq
                                fqtblfqh feqgalp oefbb ehh...
                            </Text>
                            <Flex align="center" gap="8">
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
                </Box>
                    ))
                }
            </Grid>
        </section>
    )
}