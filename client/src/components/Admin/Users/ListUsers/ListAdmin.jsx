import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../redux/User/ActionUser/getAllUser";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { editUserById } from "../../../../redux/User/ActionUser/editUserById";
import { motion } from "framer-motion";

export default function ListAdmin() {
  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col gap-2 items-center justify-start w-full h-full bg-[#282828] rounded-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-center items-center gap-2 w-[95%] my-2 py-5 text-[1.5rem] bg-[#222222] text-center rounded-lg"
      >
        <div className="w-[20rem] min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            Nombre de Usuario
          </p>
        </div>
        <div className=" w-[20rem] min-w-[224px]">
          <p className="flex text-center items-center justify-center">Email</p>
        </div>
        <div className="w-[20rem] min-w-[70px]">
          <p className="flex text-center items-center justify-center">
            Fase Proyecto
          </p>
        </div>
        <div className="w-[20rem] min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            % completado
          </p>
        </div>
        <div className="w-[20rem] min-w-[50px]">
          <p className="flex text-center items-center justify-center"></p>
        </div>
      </motion.div>
      {filteredUsers &&
        filteredUsers.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="flex gap-2 py-2 w-[95%] text-center justify-center items-center bg-[#222222] rounded-lg  text-[1.2rem]"
            key={index}
          >
            <div className=" text-center w-[20rem] min-w-[80px]">
              <p className="flex text-center items-center justify-center">
                {item.name} {item.lastname}
              </p>
            </div>
            <div className="w-[20rem] min-w-[224px]">
              <p className="flex text-center items-center justify-center">
                {item.email}
              </p>
            </div>
            <div className="w-[20rem] min-w-[80px]">
              <p className="flex text-center items-center justify-center">
                {item.progress}
              </p>
            </div>
            <div className="w-[20rem] min-w-[80px]">
              <p className="flex text-center items-center justify-center">
                {Math.floor((item.progress / 38) * 100)}%
              </p>
            </div>
            <div className="w-[20rem] min-w-[80px]">
              <div className=" flex gap-5 items-center justify-center">
                <BsTrash
                  className="w-10 h-10"
                  onClick={() => deleteUser(item._id)}
                />
                <BsPencilSquare className="w-10 h-10" />
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
}
