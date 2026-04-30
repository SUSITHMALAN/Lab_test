import { useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    {
      name: initialValues?.name || "",
      category: initialValues?.category || "",
      price: initialValues?.price || "",
      description: initialValues?.description || "",
      imageUrl: initialValues?.imageUrl || "",
      availability_status: initialValues?.availability_status || "Available",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Item Name</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>Category</label>
      <input name="category" value={formData.category} onChange={handleChange} required />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="availability_status">Availability Status</label>
      <select
        id="availability_status"
        name="availability_status"
        value={formData.availability_status}
        onChange={handleChange}
      >
        <option value="Available">Available</option>
        <option value="Out of Stock">Out of Stock</option>
        <option value="Discontinued">Discontinued</option>
      </select>

      <label>Image URL</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default ItemForm;