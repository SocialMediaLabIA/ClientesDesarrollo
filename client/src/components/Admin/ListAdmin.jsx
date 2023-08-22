import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdmin } from "../../redux/Admin/ActionAdmin/getAllAdmin";

export default function ListAdmin() {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllAdmin());
  }, [dispatch]);

  return (
    <div>
      {admin &&
        admin.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </div>
        ))}
    </div>
  );
}
