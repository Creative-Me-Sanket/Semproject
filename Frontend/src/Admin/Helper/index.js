export const RegisterTeacher = (user) => {
    console.log(user);
    return (
        fetch("http://localhost:4000/signup",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}
export const DeleteTeacher=(id)=>{
    return(
        fetch("http://localhost:4000/user/"+id,
            {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}
export const GetTeachersByHOD = (id)=>{
    return (
        fetch("http://localhost:4000/user/getbyhod/"+id,
            {
                method: "GET",
            }).then((res) => {
                return res.json();
            }).catch((err) => console.log(err))
    )
}
export const UpdateTeacher=(id,data)=>{
    return(
        fetch("http://localhost:4000/user/"+id,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}