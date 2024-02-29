import { FaPrint } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import pic from "./assets/react.svg";

const App = () => {
	return (
		<div className="w-[100%] h-[100%] bg-gray-500 flex justify-center items-center flex-wrap gap-[100px]">
			<div className="w-[28%] h-[95vh] rounded-md bg-blue-100 flex justify-start items-center flex-col md:w-[40%]  sm:w-[50%] max-sm:w-[60%] lg:w-[33%]">
				<div className=" flex justify-center items-center mt-[30px] flex-col">
					<div className="flex justify-between items-center w-[310px] ">
						<FaArrowLeft
							size={20}
							cursor="pointer"
						/>
						<FaPrint
							size={20}
							cursor="pointer"
						/>
					</div>
					<div className="font-bold mt-4 text-[20px]">My Receipt</div>
				</div>
				<div className="w-[85%] h-[70%] bg-white rounded-lg mt-6 rounded-r-lg">
					<div className="flex justify-center items-center flex-col mt-7">
						<div className="border w-[50px] h-[50px] rounded-lg flex justify-center items-center">
							<img
								src="https://media1.tenor.com/m/Hw7f-4l0zgEAAAAC/check-green.gif"
								alt=""
							/>
						</div>
						<div className="mt-2 font-bold text-[20px]">
							Transfer done
						</div>
					</div>
					<div className="border-dashed border-t-2 border-black w-full mt-2 "></div>

					<div className="flex items-center ml-3 mt-5">
						<div className="border w-[50px] h-[50px] rounded-lg flex justify-center items-center">
							<img
								src={pic}
								alt=""
							/>
						</div>
						<div className="ml-3">
							<p className="font-normal text-[15px]">Recipient</p>
							<h4 className="font-bold">Rehoboth Topper</h4>
						</div>
					</div>
					<div className=" ml-4 mt-6">
						<p className="font-normal text-[15px]">
							Reference Number
						</p>
						<h4 className="font-bold">#B3423774729</h4>
					</div>
					<div className="flex ml-4 mt-6">
						<div>
							<p className="font-normal text-[15px]">Amount sent</p>
							<h4 className="font-bold">$6000</h4>
						</div>

						<div className="ml-10">
							<p className="font-normal text-[15px]">Transfer fee</p>
							<h4 className="font-bold">$0.00</h4>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<div className="bg-blue-950 p-4 w-[270px] mt-7 rounded-md flex items-center justify-center text-white font-bold text-[15px] cursor-pointer lg:w-[350px] md:w-[300px]">
							Share
						</div>
					</div>
				</div>
				<p className="text-[13px] font-medium mt-4 ">
					it will take less than 24 hours to process it..
				</p>
			</div>

			{/* Failed */}

			<div className="w-[28%] h-[95vh] rounded-md bg-blue-100 flex justify-start items-center flex-col md:w-[40%]  sm:w-[50%] max-sm:w-[60%] lg:w-[33%] ">
				<div className=" flex justify-center items-center mt-[30px] flex-col">
					<div className="flex justify-between items-center w-[310px] ">
						<FaArrowLeft
							size={20}
							cursor="pointer"
						/>
						<FaPrint
							size={20}
							cursor="pointer"
						/>
					</div>
					<div className="font-bold mt-4 text-[20px]">My Receipt</div>
				</div>
				<div className="w-[85%] h-[70%] bg-white rounded-lg mt-6 rounded-r-lg">
					<div className="flex justify-center items-center flex-col mt-7">
						<div className="border w-[50px] h-[50px] rounded-lg flex justify-center items-center">
							<img
								src="https://media1.giphy.com/media/aWYqyxiLMZg5dVV81Y/giphy.gif"
								alt=""
							/>
						</div>
						<div className="mt-2 font-bold text-[20px]">
							Failed Transfer
						</div>
					</div>
					<div className="border-dashed border-t-2 border-black w-full mt-2 "></div>

					<div className="flex items-center ml-3 mt-5">
						<div className="border w-[50px] h-[50px] rounded-lg flex justify-center items-center">
							<img
								src={pic}
								alt=""
							/>
						</div>
						<div className="ml-3">
							<p className="font-normal text-[15px]">Recipient</p>
							<h4 className="font-bold">Rehoboth Topper</h4>
						</div>
					</div>
					<div className=" ml-4 mt-6">
						<p className="font-normal text-[15px]">
							Reference Number
						</p>
						<h4 className="font-bold">#B3423774729</h4>
					</div>
					<div className="flex ml-4 mt-6">
						<div>
							<p className="font-normal text-[15px]">Failed Amount</p>
							<h4 className="font-bold">$6000</h4>
						</div>

						<div className="ml-10">
							<p className="font-normal text-[15px]">Transfer fee</p>
							<h4 className="font-bold">$0.00</h4>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<div className="bg-blue-950 p-4 w-[270px] mt-7 rounded-md flex items-center justify-center text-white font-bold text-[15px] cursor-pointer lg:w-[350px] md:w-[300px] ">
							Share
						</div>
					</div>
				</div>
				<p className="text-[13px] font-medium mt-4">
					Something went wrong please try again..
				</p>
			</div>
		</div>
	);
};

export default App;
