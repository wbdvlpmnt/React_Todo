export async function editTask(itemToEdit: {
  title: String;
  description: String;
  index: String;
}) {
  console.log("index to edit is", itemToEdit.index);
}
