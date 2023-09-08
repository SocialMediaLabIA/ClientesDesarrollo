import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { postPage } from "../../../../redux/Pages/ActionPage/postPage";
import { getAllPage } from "../../../../redux/Pages/ActionPage/getAllPage";

export default function CreatePages({ setCreatePage }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState({
    number: "",
    title: "",
    section: false,
    video: false,
    meet: false,
    resume: false,
    document: false,
    videoSource: "",
    resumeText: "",
    meetImage: "",
    meetName: "",
    documentArray: [{}],
  });

  const [newDocument, setNewDocument] = useState([]);

  const handleChangeNumber = (e) => {
    const { value } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      number: value,
    }));
  };

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      title: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      [name]: !prevPage[name], // Cambia el valor de false a true y viceversa
    }));
  };

  const handleChangeVideoSource = (e) => {
    const { value } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      videoSource: value,
    }));
  };

  const handleChangeResumeText = (e) => {
    const { value } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      resumeText: value,
    }));
  };

  const handleChangeMeetImage = (e) => {
    const { value } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      meetImage: value,
    }));
  };

  const handleChangeMeetName = (e) => {
    const { value } = e.target;
    setPage((prevPage) => ({
      ...prevPage,
      meetName: value,
    }));
  };

  const handleAddDocument = () => {
    setPage((prevPage) => ({
      ...prevPage,
      documentArray: [...prevPage.documentArray, newDocument],
    }));
    setNewDocument({ name: "", link: "" });
  };

  const handleSubmit = () => {
    dispatch(postPage(page)).then(() => {
      setPage({
        number: "",
        title: false,
        section: false,
        video: false,
        meet: false,
        resume: false,
        document: false,
        videoSource: "",
        resumeText: "",
        meetImage: "",
        meetName: "",
        documentArray: [{}],
      });
    });
    dispatch(getAllPage()).then(() => {
      setCreatePage(false);
    });
  };
  const handleClose = () => {
    setCreatePage(false);
  };

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
          value={page.title}
          onChange={handleChangeTitle}
          placeholder="Ingrese el Titulo..."
        />
      </div>

      {page.video && (
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-bold ml-2 text-white">Video:</label>
          <input
            className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
            type="text"
            name="name"
            value={page.videoSource}
            onChange={handleChangeVideoSource}
            placeholder="Ingrese el link del Video..."
          />
        </div>
      )}
      {page.resume && (
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-bold ml-2 text-white">Resumen:</label>
          <textarea
            className="rounded-md bg-[#D9D9D9] w-80 h-40 p-2 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
            name="name"
            value={page.resumeText}
            onChange={handleChangeResumeText}
            placeholder="Ingrese el Título..."
          />
        </div>
      )}

      {page.meet && (
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-bold ml-2 text-white">Foto Empleado:</label>
          <input
            className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
            type="text"
            name="name"
            value={page.meetImage}
            onChange={handleChangeMeetImage}
            placeholder="Ingrese el link de el empleado..."
          />
        </div>
      )}
      {page.meet && (
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-bold ml-2 text-white">Nombre empleado:</label>
          <input
            className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
            type="text"
            name="name"
            value={page.meetName}
            onChange={handleChangeMeetName}
            placeholder="Ingrese el nombre del empleado..."
          />
        </div>
      )}

      {page.document && (
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-bold ml-2 text-white">Documentos:</label>
          <div className="flex gap-2 items-center justify-center">
            <input
              className="rounded-md bg-[#D9D9D9] h-10 w-36 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
              type="text"
              name="name"
              value={newDocument.name}
              onChange={(e) =>
                setNewDocument({ ...newDocument, name: e.target.value })
              }
              placeholder="Name..."
            />
            <input
              className="rounded-md bg-[#D9D9D9] h-10 w-36 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
              type="text"
              name="link"
              value={newDocument.link}
              onChange={(e) =>
                setNewDocument({ ...newDocument, link: e.target.value })
              }
              placeholder="Link..."
            />
            <IoAddOutline
              className="w-6 h-6 cursor-pointer rounded-full hover:bg-[#484848]"
              onClick={handleAddDocument}
            />
          </div>
          <div className="w-full h-fit">
            <div className="flex justify-around">
              <p className="w-40">Nombre</p>
              <p className="w-40">Link</p>
            </div>
            {page.documentArray &&
              page.documentArray.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-around"
                >
                  <p className="w-40">{item.name}</p>
                  <p className="w-40">{item.link}</p>
                </div>
              ))}
          </div>
        </div>
      )}

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
