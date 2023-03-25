import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { teamUseCases } from "../../application";
import { teamStore } from "../../services";

export const Team = observer(() => {
  useEffect(() => {
    void teamUseCases.getTeam();
  }, []);

  return (
    <div>
      <div>
        <h1>Team</h1>
        <button>Add member</button>
      </div>

      {teamStore.isLoading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>

            {teamStore.team.map((member) => {
              return (
                <tr key={member.id}>
                  <td>
                    {member.name} {member.surname}
                  </td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
});
