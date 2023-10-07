import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Features({ feature }) {
  //   console.log(feature);
  return (
    <>
      <ul className="flex text-purple-700">
        <CheckCircleIcon className="h-6 w-6 pr-3" />
        <li className="text-sm">{feature}</li>
      </ul>
    </>
  );
}

export default Features;
