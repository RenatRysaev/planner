import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table, Button, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

import { User } from "features/user/domain";
import { Layer } from "shared/components/Layer";

import { teamUseCases } from "../../application";
import { teamStore } from "../../services";
import styles from "./styles.module.scss";

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
      <Button className={styles.addMemberButton} type="primary">
        Add member
      </Button>

      {teamStore.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table columns={columns} dataSource={teamStore.team} />
      )}
    </Layer>
  );
});
