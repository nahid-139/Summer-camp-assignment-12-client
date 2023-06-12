import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UseContext";


const AddClass = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const img = event.target.img.value;
    const user = event.target.user.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const avialable = event.target.avialable.value;
    console.log(name, img, price, avialable);


    fetch("http://localhost:5000/addclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        img,
        user,
        email,
        price,
        avialable,
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
              title: 'Success!',
              text: 'Your Toy is Added Successful',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
      }
      });
  };
  return (
    <div className="my-30 w-full ">
      <form
        onSubmit={handleAddToy}
        className=" bg-slate-400 my-10 lg:w-2/3 mx-auto p-10"
      >
        <h2 className="text-3xl py-5">Add Class</h2>
        <div className="space-y-1 text-sm my-3 py-3">
          <label htmlFor="img" className="block text-xl dark:text-gray-400">
            Class Image URL *
          </label>
          <input
            type="text"
            name="img"
            placeholder="Enter Your ImageURL"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="name"
            className="block text-xl dark:text-gray-400"
          >
            Your Class Name*
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Class Name"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="user"
            className="block text-xl dark:text-gray-400"
          >
            Instractor Name*
          </label>
          <input
            type="text"
            name="user"
            defaultValue={user?.displayName}
            placeholder="Seller Name"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="email"
            className="block text-xl dark:text-gray-400"
          >
            Instarctor Email*
          </label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder=" Seller Email"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-xl dark:text-gray-400">
            Your Class Price*
          </label>
          <input
            type="text"
            name="price"
            placeholder="Your Toy price"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label htmlFor="avialable" className="block text-xl dark:text-gray-400">
            Your Class Avialable Seat
          </label>
          <input
            type="text"
            name="avialable"
            placeholder="Your Class Avialable Seat"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <button
          className="bg-orange-600 text-xl text-white py-3 px-5 my-5 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
