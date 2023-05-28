import { useEffect, useState, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { Table, Typography, Spin, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

import { User } from "slices/user/domain";
import { Layer } from "shared/components/Layer";

import { teamUseCases } from "../../application";
import { teamStore } from "../../services";
import { AddTeamMember } from "./AddTeamMember";
import { EditTeamMember } from "./EditTeamMember";

import styles from "./styles.module.scss";

export const Team = observer(() => {
  const [editingTeamMemberId, setEditingTeamMemberId] = useState<UniqueId>("");

  useEffect(() => {
    void teamUseCases.getTeam();
  }, []);

  const columns: ColumnsType<User> = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "Actions",
        dataIndex: "operation",
        key: "operation",
        render: (_, user) => {
          return (
            <div className={styles.actionCell}>
              <Button
                icon={<EditOutlined />}
                onClick={() => setEditingTeamMemberId(user.id)}
              />
              <Popconfirm
                title={"Delete the team member"}
                description={"Are you sure to delete this team member?"}
                onConfirm={() => teamUseCases.removeTeamMember(user.id)}
                okText={"Ok"}
                cancelText={"No"}
              >
                <Button icon={<DeleteOutlined />} />
              </Popconfirm>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <Layer>
      <Typography.Title>Team</Typography.Title>

      <AddTeamMember />
      <EditTeamMember
        editingTeamMemberId={editingTeamMemberId}
        setEditingTeamMemberId={setEditingTeamMemberId}
      />

      <Spin spinning={teamStore.isLoading}>
        <Table columns={columns} dataSource={teamStore.team} rowKey="id" />
      </Spin>
    </Layer>
  );
});
