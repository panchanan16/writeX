import { Flex, Card, Container, Heading, Button, TextField } from '@radix-ui/themes';
import { useRef } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';


export default function SignUp() {
  const name = useRef()
  const designation = useRef()
  const email = useRef()
  const password = useRef()

  const notify = () => toast.success('You are signed up', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  async function signupnow() {
    const signupdata = {username: name.current.value, designation: designation.current.value, email: email.current.value, password: password.current.value}

    const postReq = await fetch('http://localhost:8000/apiv1/signUp-user', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify(signupdata)
    })
    const data = await postReq.json()
    if (postReq.ok) { notify(); }
  }
  return (
    <Container size="1" align="center" p="4" >
      <Card style={{ maxWidth: 500, padding: 15, marginTop: 50 }}>
        <Flex direction="column" gap="4">
          <Heading>Sign up to continue</Heading>
          <Flex direction="column" gap="4">
            <TextField.Input size="3" ref={name} placeholder="Enter your name..." />
            <TextField.Input size="3" ref={designation} placeholder="Enter your designation..." />
            <TextField.Input size="3" ref={email} placeholder="Enter your email..." />
            <TextField.Input size="3" ref={password} placeholder="Enter your password..." />
          </Flex>
          <Flex direction="row" gap="3" align="center" justify="center">
            <Button variant="outline" onClick={signupnow} size="3">Sign Up</Button>
          </Flex>
        </Flex>
      </Card>
      <div>
        <ToastContainer />
      </div>
    </Container>
  );
}