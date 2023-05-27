import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table, Typography, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";

import { User } from "slices/user/domain";
import { Layer } from "shared/components/Layer";

import { teamUseCases } from "../../application";
import { teamStore } from "../../services";
import { AddTeamMember } from "./AddTeamMember";

const columns: ColumnsType<User> = [
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
];

export const Team = observer(() => {
  useEffect(() => {
    void teamUseCases.getTeam();
  }, []);

  return (
    <Layer>
      <Typography.Title>Team</Typography.Title>

      <AddTeamMember />

      <Spin spinning={teamStore.isLoading}>
        <Table columns={columns} dataSource={teamStore.team} rowKey="id" />
      </Spin>
    </Layer>
  );
});
