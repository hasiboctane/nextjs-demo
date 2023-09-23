"use client"
import { useState } from "react"

export default function Page () {
    const[goals,setGoals]= useState("");
    const handleForm =(e)=>{
        e.preventDefault();
        console.log(goals);
        setGoals("")
    }
    return (
        <div className="flex flex-col  justify-center items-center">
            <h1 className="text-center text-3xl font-bold mt-8 text-purple-600">Add Your Goals</h1>
            <div className="main-box h-[400px] w-[640px] border-solid border-2 border-sky-500 mt-10">
                <form onSubmit={handleForm} action="" className="flex flex-col  justify-center items-center mt-16 gap-5">
                    <input 
                        type="text"
                        placeholder="Add Your Goal" 
                        className="input input-bordered input-primary w-full max-w-xs" 
                        value={goals}
                        onChange={(e)=>setGoals(e.target.value)}
                    />
                    <button className="btn btn-outline btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}