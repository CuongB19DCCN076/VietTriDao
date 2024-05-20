import { Link } from "react-router-dom"
import image1 from "../assets/image22.png";
import image2 from "../assets/image23.png";
import image3 from "../assets/image24.png";
import toast from "react-hot-toast";
import axios from "axios";
const LoginForm = () => {
    const fetchData = async () => {
        try {
            await axios.get("https://bookcar-backend-2.onrender.com/api/v1/auth/get-all-product-pagi/1")
        } catch (error) {
            console.log(error)
        }
    }
    const myPromise = fetchData();

    
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.promise(myPromise, {
        loading: 'Loading....',
        success: 'Success',
        error: 'Error when fetching',
    });
    }
    return (
        <section className="bg-white dark:bg-gray-900 h-[900px]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-10 lg:py-0">
                <div className="w-full bg-white rounded-lg overflow-hidden shadow dark:border md:mt-0 sm:max-w-[830px] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between gap-3">
                        <div className="flex justify-center items-center w-full text-[35px] font-bold text-skin-base bg-[#EFEFEF]">
                            Sign in
                        </div>
                        <div className="flex justify-center items-center w-full text-[35px] font-bold bg-[#EFEFEF]">
                            New account
                        </div>
                    </div>
                    <div className="py-20 flex items-center justify-center bg-[#EFEFEF] mt-2">
                        <form>
                            <div >
                                <div className="flex gap-5 justify-between">
                                    <label htmlFor="" className="text-[30px] font-bold block">User name:</label>
                                    <input type="text" className="bg-[#f9e8e3] md:min-w-[424px] p-4 rounded-md" placeholder="Enter your user name or email" />
                                </div>
                                <div className="flex gap-5 mt-5 justify-between">
                                    <label htmlFor="" className="text-[30px] font-bold block">Password:</label>
                                    <input type="text" className="bg-[#f9e8e3] md:min-w-[424px] p-4 rounded-md" placeholder="Enter your password" />
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-[20px] font-bold text-white w-full mt-12" onClick={(e) => handleSubmit(e)}>SIGN IN</button>
                                <Link to={"../../register"} className="text-skin-base text-[30px] font-bold block w-full text-center mt-8 " >
                                    Forgot your password?
                                </Link>
                                <div className="text-[30px] mt-10 text-black">
                                    Or connect with:
                                </div>
                                <div className="flex justify-between mx-32 mt-10">
                                    <img src={image1} alt="" />
                                    <img src={image2} alt="" />
                                    <img src={image3} alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm