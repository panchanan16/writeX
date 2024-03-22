import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session : {
        jwt : true
    },
    providers: [
        CredentialsProvider({

          async authorize(credentials) {
            const loginData = {email: credentials.email, password: credentials.password} 
            const user = await fetch('http://localhost:8000/apiv1/login-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
            const userData = await user.json()

            if (userData.user.email == credentials.email && userData.user.password == credentials.password) {
               return {email: userData.user}
            } else {
              throw new Error("email or password mismatch")
            }
          }
        })
      ]
  }


export default NextAuth(authOptions)

