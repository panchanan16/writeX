import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Avatar, Flex, Heading } from "@radix-ui/themes"

export function Footer(params) {
    return (
        <section style={{ marginTop: 30 }}>
            <footer>
                <div style={styles}>
                    <div>
                        <Flex align='center' gap="3">
                            <Avatar
                                size="3"
                                src="./logo.jpg"
                                radius="full"
                                fallback="T"
                            />
                            <h2 style={{color: "white"}}>Learnyaar</h2>
                        </Flex>
                    </div>
                    <p style={{ color: 'white', fontWeight: 'bold' }}>made by @panchanan</p>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <p style={{ color: "white", fontSize: '14px' }}>Contact us :</p>
                        <InstagramLogoIcon color="white" width="18" height="18" />
                        <TwitterLogoIcon color="white" width="18" height="18" />
                        <LinkedInLogoIcon color="white" width="18" height="18" />
                    </div>
                </div>
            </footer>
        </section>
    )
}

const styles = {
    backgroundColor: 'black',
    padding: 10,
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

