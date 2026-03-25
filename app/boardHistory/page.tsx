import { presidents } from "../data/boardHistory";

export default function BoardHistory() {
  return (
    <>
      <table>
        <tbody>
          {presidents.map((row, index) => (
            <tr key={index}>
              <td>
                {row.left.years} | {row.left.name}
              </td>

              <td>
                {row.right?.years
                  ? `${row.right.years} | ${row.right.name}`
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
