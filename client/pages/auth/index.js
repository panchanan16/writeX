import { Flex, Card, Container, Heading, Button, TextField, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { useRef } from 'react';
import Cookies  from 'universal-cookie';
import "react-toastify/dist/ReactToastify.css";
import { signIn } from 'next-auth/react';
import { getSession } from "next-auth/react";
import { useRouter } from 'next/router'


export default function LogIn() {
  const cookies = new Cookies();
  const router = useRouter()
  const email = useRef()
  const password = useRef()
  async function loginNow(params) {
    const authResult = await signIn('credentials', {email: email.current.value, password: password.current.value, redirect: false})
    const ses = await getSession()
    
    if (authResult.ok) {
      cookies.set('token', ses.user.email.token, { path: '/' }); 
      router.push('/')
    }
  }
 
  return (
    <>
      <Container size="1" align="center" p="4">
        <Card style={{ maxWidth: 500, padding: 15, marginTop: 70 }}>
          <Flex direction="column" gap="4">
            <Heading>Log in to continue</Heading>
            <Flex direction="column" gap="4">
              <TextField.Input size="3" ref={email} placeholder="Enter your email..." />
              <TextField.Input size="3" ref={password} placeholder="Enter your password..." />
              <Link href="auth/recover" style={{ textDecoration: "none" }}>forgot password?</Link>
            </Flex>
            <Flex direction="row" gap="3">
              <Button variant="soft" size="3" asChild="true"><Link href="/auth/signup" style={{ textDecoration: "none" }}>Create account</Link></Button>
              <Button variant="outline" size="3" onClick={loginNow}>Sign in</Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </>
  );
}


