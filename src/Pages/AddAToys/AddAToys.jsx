import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddAToys = () => {
  const {user} = useContext(AuthContext)
  const handleAddToy = event => {
    event.preventDefault()
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
  

    const allToys = {
      photo,
      name,
      sellerEmail,
      sellerName,
      category,
      price,
      rating,
      description
    }
    console.log(allToys)
    
    fetch("http://localhost:5000/upload-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    

  }


  return (
    <div className="container mx-auto mb-10 ">
      <form onSubmit={handleAddToy} >
        <div className=" border shadow-md p-10 rounded-sm">
          <h1 className="text-4xl text-primary font-bold underline text-center">
            Add A Toy
          </h1>
          <div className="card-body md:grid sm:grid-cols-1 md:grid-cols-2  gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg ">Toy Picture URL</span>
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Seller Email</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Sub-category</span>
              </label>
              <input
                type="text"
                name="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Price</span>
              </label>
              <input
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Available quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text text-lg">Detail description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Add Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddAToys;
