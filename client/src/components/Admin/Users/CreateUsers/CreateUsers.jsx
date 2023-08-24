import CreateUserForm from "./MUI/CreateUserForm";

export default function CreateUsers() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-[#282828] rounded-lg">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-[2rem] font-semibold">
          Formulario Creación Usuario
        </h2>
        <CreateUserForm />
      </div>
    </div>
  );
}
