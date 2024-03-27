import { toast, Bounce } from 'react-toastify';

const notifyObject = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  }

export const notify = (type, msg) => {
    if (type === "success") {
        return toast.success(msg, notifyObject);
    }else{
        return toast.error(msg, notifyObject);
    }
}
