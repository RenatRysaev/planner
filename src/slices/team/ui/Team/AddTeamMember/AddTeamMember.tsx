import { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import { useForm, Controller, FieldValues } from "react-hook-form";

import styles from "./styles.module.scss";

const formId = "add-team-member-form";

export const AddTeamMember = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      role: "reader",
    },
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Button
        className={styles.addMemberButton}
        type="primary"
        onClick={openModal}
      >
        Add member
      </Button>

      <Modal
        open={isOpenModal}
        onCancel={closeModal}
        okButtonProps={{ htmlType: "submit", form: formId }}
      >
        <form
          id={formId}
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.field}
                placeholder="Name"
                required
              />
            )}
          />
          <Controller
            name="surname"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.field}
                placeholder="Surname"
                required
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.field}
                placeholder="Email"
                required
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className={styles.field}
                placeholder="Select a role"
                defaultValue="reader"
                options={[
                  { value: "reader", label: "Reader" },
                  { value: "admin", label: "Admin" },
                ]}
              />
            )}
          />
        </form>
      </Modal>
    </div>
  );
};
