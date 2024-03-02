import { useState } from "react";
//   export default function NewTodoForm({onSubmit}) will also work this is called destructuring
export default function NewTodoForm(props: any){

  const [newItem, setNewItem] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit(newItem)
    setNewItem(""); // Clear input field after submission
  }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
      <button type="submit" className="btn">Add</button>
    </div>
  </form>
    )
    
}