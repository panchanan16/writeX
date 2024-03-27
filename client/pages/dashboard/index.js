import DashHead from "@/components/ui/dashboardUI/dashHead";
import DashItems from "@/components/ui/dashboardUI/dashItem";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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