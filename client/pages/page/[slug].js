import GetEachBlog from "@/components/ui/recentblogUI/getEachBlog"
import { Footer } from "@/components/ui/footer"
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Article(params) {
        return (
           <>
                <GetEachBlog />
                <Footer/>
                <div>
                    <ToastContainer />
                </div>
           </>
        )
    
}