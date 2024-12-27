function Navbar(){

    return (
        <header>
                    
        <div className=" text-white h-[9rem] flex w-screen items-center px-16 justify-between ">
            <div className="text-[3rem]">Todo Application</div>
            <div  className="flex gap-3">
                <button className="bg-white px-12 text-xl py-[10px] rounded-3xl text-black border-white hover:bg-black transition ease-in-out delay-150 hover:text-white ">SignUp </button>
                <button className="bg-white px-12 text-xl py-[10px] rounded-3xl text-black border-white hover:bg-black hover:text-white transition ease-in-out delay-150">Login</button>
            </div>
        </div>
    </header>
    )
}
export default Navbar;