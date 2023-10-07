import Features from "../Features/Features";

function PriceCard({ price }) {
  return (
    <>
      <div className="mx-6 text-center bg-purple-200 rounded-md mt-12 p-4">
        <h2 className="py-3 text-4xl font-extrabold text-purple-700">
          {price.price}
        </h2>
        <h1 className="font-bold text-purple-500">{price.name}</h1>
        <div className="text-center text-purple-700">
          <p className="font-bold text-lg">Features</p>
          <div className="py-3 text-center">
            {price.features.map((feature, index) => (
              <Features key={index} feature={feature} />
            ))}
          </div>
        </div>
        <button className="rounded py-2 font-bold bg-purple-700 text-white text-center w-full mt-auto">
          Buy Now
        </button>
      </div>
    </>
  );
}

export default PriceCard;
