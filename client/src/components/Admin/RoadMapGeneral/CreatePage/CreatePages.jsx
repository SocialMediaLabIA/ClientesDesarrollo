import { useState } from "react";

export default function CreatePages({ setCreatePage }) {
  const [page, setPage] = useState({
    number: "",
    section: false,
    video: false,
    meet: false,
    resume: false,
    document: false,
    title: false,
    videoSource: "",
    resumeText: "",
    meetImage: "",
    meetName: "",
    documentArray: { name: "", link: "" },
  });

  const handleChangeNumber = (e) => {
    const { value } = e.target;
    setPage({
      number: value,
    });
  };

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setPage({
      title: value,
    });
  };

  const handleChangeVideo = (e) => {
    const { value } = e.target;
    setPage({
      title: value,
    });
  };

  const handleChangeImage = (e) => {
    const { value } = e.target;
    setPage({
      title: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      [name]: !prevPage[name], // Cambia el valor de false a true y viceversa
    }));
  };

  const handleSubmit = () => {
    setPage({
      role: "",
      name: "",
      lastname: "",
      instagram: "",
      email: "",
      password: "",
      isActive: true,
      access: false,
      progress: 0,
    });
    setCreatePage(false);
  };
  const handleClose = () => {
    setCreatePage(false);
  };

  console.log(page);

  return (
    <div className="flex items-center justify-center w flex-col gap-5">
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Posición:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="number"
          name="number"
          value={page.number}
          onChange={handleChangeNumber}
          placeholder="Ingrese la Posicion"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <label className="font-bold ml-2 text-white">Tipo de Pagina:</label>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="flex gap-5">
            <label>
              <input
                type="checkbox"
                name="section"
                checked={page.section}
                onChange={handleCheckboxChange}
              />
              Sección
            </label>

            <label>
              <input
                type="checkbox"
                name="video"
                checked={page.video}
                onChange={handleCheckboxChange}
              />
              Video
            </label>

            <label>
              <input
                type="checkbox"
                name="meet"
                checked={page.meet}
                onChange={handleCheckboxChange}
              />
              Meet
            </label>
          </div>
          <div className="flex gap-5">
            <label>
              <input
                type="checkbox"
                name="resume"
                checked={page.resume}
                onChange={handleCheckboxChange}
              />
              Resumen
            </label>

            <label>
              <input
                type="checkbox"
                name="document"
                checked={page.document}
                onChange={handleCheckboxChange}
              />
              Documento
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Titulo:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="text"
          name="name"
          value={page.name}
          onChange={handleChangeTitle}
          placeholder="Ingrese el Titulo..."
        />
      </div>

      <div className="flex gap-2">
        <button
          className="bg-[#6610A9] rounded-2xl py-2 px-10 text-white font-bold"
          onClick={() => {
            handleClose();
          }}
        >
          Cerrar
        </button>
        <button
          className="bg-[#6610A9] rounded-2xl py-2 px-10 text-white font-bold"
          onClick={() => {
            handleSubmit();
          }}
        >
          Crear Pagina
        </button>
      </div>
    </div>
  );
}
