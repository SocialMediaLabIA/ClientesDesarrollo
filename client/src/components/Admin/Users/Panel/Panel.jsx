import { FaRegUserCircle } from "react-icons/fa";

export default function Panel() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-[#282828] rounded-lg">
      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <FaRegUserCircle className="w-40 h-40" />
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold">
            Bienvenido Administrador
          </h2>
        </div>
      </div>
    </div>
  );
}
