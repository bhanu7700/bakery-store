import { ToastContainer } from "react-toastify";
import "./App.css";
import Nav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Nav />
      <ToastContainer
        className="custom-toast-container"
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="hero h-[650px] flex justify-center items-center max-md:flex-col gap-10">
        <div className="flex flex-col items-start text-start max-lg:items-center max-lg:text-center">
          <h1 className="text-[#2b4174] text-[30px] max-md:text-[20px] font-bold mb-3">
            {" "}
            <span className="text-[#fc7c7c]">40%</span> Sale Off
          </h1>
          <h1 className="text-[50px] max-md:text-[40px] font-playfair font-semibold leading-[60px] mb-6">
            Quality Products <br /> Bakery Items
          </h1>
          <button className="bg-[#fc7c7c] px-8 py-5 text-white rounded-[20px] font-bold text-[20px] max-md:text-[16px]">
            SHOP NOW
          </button>
        </div>
        <div className="mt-28 max-md:mt-6">
          <img
            src="/images/buns.webp"
            alt="Buns"
            className="animate-[bounce_2s_ease-in-out_infinite] "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
