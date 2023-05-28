import { useMemo, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Modal, Input, Select } from "antd";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";

import { User } from "slices/user/domain";
import { teamStore } from "slices/team/services";
import { teamUseCases } from "slices/team/application";

import styles from "./styles.module.scss";

const formId = "edit-team-member-form";

type FormValues = Omit<User, "id">;

type EditTeamMemberProps = {
  editingTeamMemberId: UniqueId;
  setEditingTeamMemberId: (id: UniqueId) => void;
};

export const EditTeamMember = observer(
  ({ editingTeamMemberId, setEditingTeamMemberId }: EditTeamMemberProps) => {
    const editingTeamMember = teamStore.getTeamMemberById(editingTeamMemberId);

    const defaultFormValues = useMemo(
      () => ({
        name: editingTeamMember.name,
        email: editingTeamMember.email,
        role: editingTeamMember.role,
      }),
      [editingTeamMember]
    );

    const { handleSubmit, control, reset } = useForm<FormValues>({
      defaultValues: defaultFormValues,
    });

    useEffect(() => {
      reset(editingTeamMember);
    }, [editingTeamMember, reset]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      void teamUseCases.editTeamMember({
        ...editingTeamMember,
        ...data,
      });

      reset();

      closeModal();
    };

    const closeModal = () => {
      setEditingTeamMemberId("");
    };

    return (
      <div>
        <Modal
          title={"Edit team member"}
          open={!!editingTeamMemberId}
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
  }
);
