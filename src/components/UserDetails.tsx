"use client";

import { useEffect, useState } from "react";

interface Address {
    city: string;
}

interface Users {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: Address;
}

const UserDetails = () => {
    const [userData, setUserData] = useState([])

    const getUsers = async () => {
        try {
            console.log(765765, "fetching started...")
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await data.json();
            setUserData(users)
            console.log(765765, "fetching completed", users)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
            {
                userData && userData?.length > 0 && userData.map((item: Users) => {
                    return (
                        <div key={item.id} className="bg-white shadow-lg p-4 border border-slate-300 rounded-lg">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                Email: {item.email}
                            </div>
                            <div>
                                Phone No.: {item.phone}
                            </div>
                            <div>
                                City: {item.address.city}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserDetails;