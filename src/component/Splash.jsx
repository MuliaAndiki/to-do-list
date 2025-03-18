const Splash = ({isBlur}) => {
    return(
        <div id="splas" className={`fixed inset-0 flex items-center justify-center bg-black ${isBlur ? "opacity-0" : "opacity-[1]"} duration-300`}>
            <img src="/public/assets/Splash1.gif" class="w-full h-full object-cover" alt="splas screen"/>
         </div>
    );
}

export default Splash;