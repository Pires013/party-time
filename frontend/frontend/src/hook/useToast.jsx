import { toast } from "react-toastify";

const useToast = (msg, sttatus = null) => {
    if(!sttatus) {
        toast.success(msg, {
            position: "top-right",
            autoCLose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
    } else if (sttatus === "error") {
        toast.error(msg, {
            position: "top-right",
            autoCLose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
    }
}

export default useToast;