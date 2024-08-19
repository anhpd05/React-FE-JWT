import React, { useEffect, useState } from "react";
import { Descriptions, message, notification, Space, Table, Tag } from "antd";
import { getAllUser } from "../../util/api";
const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    const getUser = async (req, res) => {
      const data = await getAllUser();
      console.log(data.message);
      if (data.data) {
        setDataUser(data.data);
      } else {
        notification.error({
          message: "Error 401",
          descriptions: data.message ?? "Error",
        });
      }
    };
    getUser();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
};
export default UserPage;
