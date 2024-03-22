import { Flex, Card, Container, Heading, Button, TextField} from '@radix-ui/themes';
import Link from 'next/link';


export default function LogIn() {
  return (
    <Container size="1" align="center" p="4">
      <Card style={{ maxWidth: 500, padding: 15, marginTop: 100 }}>
        <Flex direction="column" gap="4">
          <Heading>Recover password</Heading>
          <Flex direction="column" gap="4">
            <TextField.Input size="3" placeholder="Enter your email you signup before..." />
          </Flex>
          <Flex direction="row" gap="3">
            <Button variant="outline" size="3" onClick={() => console.log("Sign in successfull")}>Submit</Button>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}