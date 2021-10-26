import faker from "faker";
import { useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    const newUser = {
      name: faker.name.findName(),
      uid: faker.random.uuid()
    };
    setUsers([...users, newUser]);
  };

  const handleRemoveUser = (uid) => {
    const newUser = users.filter((user) => user.uid !== uid);
    setUsers(newUser);
  };

  const handleUpdateUser = (uid) => {
    const newUser = users.map((user) => {
      if (user.uid === uid) {
        return {
          ...user,
          name: faker.name.findName()
        };
      }
      return user;
    });

    setUsers(newUser);
  };

  return (
    <div>
      <h1> Titulo</h1>,
      <ul>
        {users.map((userd) => (
          <li onClick={() => handleUpdateUser(userd.uid)}> {userd.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Agregar</button>
    </div>
  );
};

export default UsersList;
