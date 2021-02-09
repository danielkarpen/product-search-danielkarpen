import { catalog } from "~/lib";

function renderTableRows() {
  return catalog
    .map(
      (product) => `<tr>
  <td>${product.category}</td>
  <td>${product.name}</td>
  <td>${product.price}</td>
</tr>
`
    )
    .join("\n");
}

export default () => `
<tbody>
  ${renderTableRows()}
</tbody>
`;
