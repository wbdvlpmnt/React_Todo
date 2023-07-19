export async function editTask(
  index: String,
  setIdToEdit: React.Dispatch<React.SetStateAction<String>>
) {
  setIdToEdit(index);
}
