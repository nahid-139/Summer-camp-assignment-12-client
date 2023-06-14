import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import {  FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const [useBuyer, SetUseBuyer] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["use"],
    queryFn: () => {
      fetch("https://summer-school-server-nahid-139.vercel.app/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            const allBuyer = data.filter((User) => {
              return User.role === "user";
            });
            SetUseBuyer(allBuyer);
          }
        });
    },
  });

  // handlemake Admin
  const handleMakeAdmin = id => {
    fetch(`https://summer-school-server-nahid-139.vercel.app/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("admin SuccessFull");
          refetch();
        }
      });
  };
  // handleDeleted
  const handleDelete = users => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://summer-school-server-nahid-139.vercel.app/users/${users._id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                      refetch();
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                  }
              })
      }
  })
  };

  return (
    <div>
      <Helmet>
                <title>LinGo | All Users</title>
            </Helmet>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Action</th>
              <th>Promotion</th>
            </tr>
          </thead>
          <tbody>
            {useBuyer.map((users, i) => (
              <tr key={users._id}>
                <th>{i + 1}</th>
                <td className="flex items-center">
                  {users.name}
                  <span className="ml-2 font-semibold">
                  </span>
                </td>
                <td>{users?.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(users)}
                    className="btn   border-t-orange-500 btn-xs text-white"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {users.role === 'admin' ? 'admin' :
                    <button onClick={() => handleMakeAdmin(users._id)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
