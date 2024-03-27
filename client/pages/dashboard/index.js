import DashHead from "@/components/ui/dashboardUI/dashHead";
import DashItems from "@/components/ui/dashboardUI/dashItem";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    if (!session) { return { redirect: { destination: '/auth', permanent: false } }}
    return { props: { session } }
  }

export default function Dashboard() {
    return (
        <>
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                <DashHead/>
                <DashItems/>
                <div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}