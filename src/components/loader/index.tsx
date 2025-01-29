import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-full w-full bg-white flex justify-center items-center cursor-progress">
      <ColorRing
        colors={["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]}
      />
    </div>
  );
}
