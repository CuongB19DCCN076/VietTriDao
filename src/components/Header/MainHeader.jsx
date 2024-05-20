import { Link } from 'react-router-dom'
import logo from "./../../assets/logo.png"
// import { useSelector } from 'react-redux';
const MainHeader = () => {
    // const theme = useSelector((state) => state.theme.value);
    return (
        <div className='border-b-[3px] border-[#616060]'>
            <div className='flex items-center px-14'>
                <Link className='text-[23px] font-normal ' to={"../../../"}>
                    <img src={logo} alt="logo" />
                </Link>
                <Link className='ml-2 w-[234px] flex justify-center items-center h-full text-[25px] font-bold text-[#616060]' to={"../../../"}>
                    HomePage
                </Link>
                <div className='flex ml-auto'>
                    <Link className=' flex justify-center items-center h-full text-[25px] mr-10 text-[#616060]' to={"../../../buy"}>
                        BUY/RENT
                    </Link>
                    <Link className=' flex justify-center items-center h-full text-[25px] mr-10  text-[#616060]' to={"../../../sell"}>
                        SELL
                    </Link>
                    <Link className=' flex justify-center items-center h-full text-[25px] mr-10  text-[#616060]' to={"../../../login"}>
                        LOGIN
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainHeader