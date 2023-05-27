import { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";

import { User } from "slices/user/domain";
import { teamUseCases } from "slices/team/application";

import styles from "./styles.module.scss";

const formId = "add-team-member-form";

type FormValues = Omit<User, "id">;

export const AddTeamMember = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      role: "reader",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const id = window.crypto.randomUUID();

    void teamUseCases.addTeamMember({
      id,
      ...data,
    });

    reset();

    closeModal();
  };

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
        title={"Add team member"}
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
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.field}
                placeholder="Email"
                required
                type={"email"}
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
