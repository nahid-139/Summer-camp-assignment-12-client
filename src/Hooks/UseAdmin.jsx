import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";

// import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
// export default useAdmin;