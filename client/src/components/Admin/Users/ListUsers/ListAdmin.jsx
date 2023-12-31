import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../redux/User/ActionUser/getAllUser";
import { BsTrash, BsPencilSquare, BsCheckSquare } from "react-icons/bs";
import { editUserById } from "../../../../redux/User/ActionUser/editUserById";
import { motion } from "framer-motion";
import PaginationOutlined from "../../../pagination/PaginationOutlined";

export default function ListAdmin() {
  const dispatch = useDispatch();
  const [editStates, setEditStates] = useState({});
  const [user, setUser] = useState([]);

  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllUser());
  }, [dispatch]);

  const deleteUser = (id) => {
    const body = {
      isActive: false,
    };
    dispatch(editUserById(id, body)).then(() => {
      dispatch(getAllUser());
    });
  };

  const filteredUsers = users.filter(
    (user) => user.isActive && user.role === "client"
  );

  function extractInstagramUsername(instagramLink) {
    const trimmedLink = instagramLink.endsWith("/")
      ? instagramLink.slice(0, -1)
      : instagramLink;
    const parts = trimmedLink.split("/");
    const username = parts.pop();
    return username;
  }

  const toggleEdit = (userId) => {
    setEditStates({});
    setUser({});

    const selectedUser = users.find((user) => user._id === userId);

    setUser({
      ...user,
      [userId]: {
        ...user[userId],
        name: selectedUser.name,
        lastname: selectedUser.lastname,
        instagram: selectedUser.instagram,
        email: selectedUser.email,
        password: selectedUser.password,
      },
    });

    setEditStates((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const handleChange = (event, userId) => {
    const { name, value } = event.target;
    setUser((prevEditUser) => ({
      ...prevEditUser,
      [userId]: {
        ...prevEditUser[userId],
        [name]: value,
      },
    }));
  };

  console.log(user);
  const handleSubmitUser = (userId) => {
    dispatch(editUserById(userId, user)).then(() => {
      setEditStates({});
      setUser({});
      dispatch(getAllUser());
    });
  };

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = filteredUsers.slice(indexFirstCard, indexLastCard);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-start w-full h-full bg-[#282828] rounded-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-center items-center gap-2 w-[95%] my-2 py-5 text-[1.5rem] bg-[#222222] text-center rounded-lg"
      >
        <div className="w-[14rem] min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            Usuario
          </p>
        </div>
        <div className="w-[14rem] min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            instagram
          </p>
        </div>
        <div className=" w-[14rem] min-w-[224px]">
          <p className="flex text-center items-center justify-center">Email</p>
        </div>
        <div className=" w-[14rem] min-w-[224px]">
          <p className="flex text-center items-center justify-center">
            Contraseña
          </p>
        </div>
        <div className="w-[14rem] min-w-[70px]">
          <p className="flex text-center items-center justify-center">
            Sección
          </p>
        </div>
        <div className="w-[14rem] min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            % completado
          </p>
        </div>
        <div className="absolute right-1 w-[14rem] min-w-[50px]">
          <p className="flex text-center items-center justify-center"></p>
        </div>
      </motion.div>

      {currentCard &&
        currentCard.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex gap-2 py-2 w-[95%] text-center justify-center items-center bg-[#222222] rounded-lg  text-[1.2rem]"
              key={index}
            >
              {editStates[item._id] ? (
                <div className="flex justify-center items-center gap-5">
                  <input
                    className="rounded-md bg-[#D9D9D9] h-10 w-44 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
                    type="text"
                    name="name"
                    value={user[item._id]?.name || ""}
                    onChange={(event) => handleChange(event, item._id)}
                    placeholder="Ingrese el nombre..."
                  />
                  <input
                    className="rounded-md bg-[#D9D9D9] h-10 w-44 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
                    type="text"
                    name="lastname"
                    value={user[item._id]?.lastname || ""}
                    onChange={(event) => handleChange(event, item._id)}
                    placeholder="Ingrese el apellido..."
                  />
                  <input
                    className="rounded-md bg-[#D9D9D9] h-10 w-52 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
                    type="text"
                    name="instagram"
                    value={user[item._id]?.instagram || ""}
                    onChange={(event) => handleChange(event, item._id)}
                    placeholder="Ingrese el instagram..."
                  />
                  <input
                    className="rounded-md bg-[#D9D9D9] h-10 w-48 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
                    type="text"
                    name="email"
                    value={user[item._id]?.email || ""}
                    onChange={(event) => handleChange(event, item._id)}
                    placeholder="Ingrese el email..."
                  />
                  <input
                    className="rounded-md bg-[#D9D9D9] h-10 w-44 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
                    type="text"
                    name="password"
                    value={user[item._id]?.password || ""}
                    onChange={(event) => handleChange(event, item._id)}
                    placeholder="Ingrese el password..."
                  />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="flex gap-2 py-2 w-[95%] text-center justify-center items-center bg-[#222222] rounded-lg  text-[1.2rem]"
                >
                  <div className=" text-center w-[14rem] min-w-[80px]">
                    <p className="flex text-center items-center justify-center">
                      {item.name} {item.lastname}
                    </p>
                  </div>
                  <div className=" text-center w-[14rem] min-w-[80px]">
                    <p className="flex text-center items-center justify-center">
                      {item.social && item.social.instagram
                        ? item.social.instagram.user
                        : extractInstagramUsername(item.instagram)}
                    </p>
                  </div>
                  <div className="w-[14rem] min-w-[224px]">
                    <p className="flex text-center items-center justify-center">
                      {item.email}
                    </p>
                  </div>
                  <div className="w-[14rem] min-w-[224px]">
                    <p className="flex text-center items-center justify-center">
                      {item.password}
                    </p>
                  </div>
                  <div className="w-[14rem] min-w-[80px]">
                    <p className="flex text-center items-center justify-center">
                      {item.progress}
                    </p>
                  </div>
                  <div className="w-[14rem] min-w-[80px]">
                    <p className="flex text-center items-center justify-center">
                      {Math.floor((item.progress / 38) * 100)}%
                    </p>
                  </div>
                </motion.div>
              )}

              {editStates[item._id] ? (
                <div className=" absolute right-8 w-[14rem] min-w-[80px]">
                  <div className=" flex gap-5 items-center justify-center">
                    <BsCheckSquare
                      className="w-10 h-10"
                      onClick={() => handleSubmitUser(item._id)}
                    />
                  </div>
                </div>
              ) : (
                <div className=" absolute right-8 w-[14rem] min-w-[80px]">
                  <div className=" flex gap-5 items-center justify-center">
                    <BsTrash
                      className="w-10 h-10"
                      onClick={() => deleteUser(item._id)}
                    />
                    <BsPencilSquare
                      className="w-10 h-10"
                      onClick={() => toggleEdit(item._id)}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      <div className=" mb-6">
        <PaginationOutlined
          pageStyle={pageStyle}
          setPageStyle={setPageStyle}
          cardXPage={cardXPage}
          data={filteredUsers}
          pages={pages}
          current={currentPage}
        />
      </div>
    </div>
  );
}
