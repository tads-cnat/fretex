import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export function Toast() {
    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    )
}