import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/User/ActionUser/getAllUser";

export default function ListAdmin() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div>
      {users &&
        users.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </div>
        ))}
    </div>
  );
}
