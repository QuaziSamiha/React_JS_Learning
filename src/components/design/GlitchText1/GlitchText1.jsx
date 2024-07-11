import "./glitchText1.css";
const GlitchText1 = () => {
	return (
		<div>
			<h1 className="">CSS Design</h1>
			<div className="glitch-wrapper">
				<div className="glitch" data-glitch="Glitch">
					Glitch
				</div>
			</div>

			{/* =================================================== */}
			<div className="w-full h-48 my-8 flex items-center justify-center bg-gray-900">
				<div className="relative text-6xl font-bold text-white tracking-wide">
					<span className="absolute top-0 left-0 animate-glitch1 text-cyan-400 opacity-80 select-none">
						glitch
					</span>
					<span className="absolute top-0 left-0 animate-glitch2 text-pink-400 opacity-80 select-none">
						glitch
					</span>
					<span className="relative">glitch</span>
				</div>
			</div>
		</div>
	);
};

export default GlitchText1;
