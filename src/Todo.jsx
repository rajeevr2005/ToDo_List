import React, { useState } from 'react';

const Todo = () => {
    const [Interest, setInterest] = useState("");

    const [interestList, setInterestList] = useState([]);

    const HandleAdd = () => {

        if (Interest === "") {
            alert("please Enter Task");
        }

        else if (
            interestList.some(item=>item.toLowerCase() === Interest.toLowerCase().trim()
            )) {
            alert("Duplicate Interest not allowed");
            setInterest("");
        }

        else {
            setInterestList([...interestList, Interest]);
            setInterest("");
        }
    }

    const HandleDelete=(index)=>{
        const updateList=interestList.filter((_,i)=>
            i !==index)
        setInterestList(updateList)
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='container d-flex justify-content-center'>

                    <div className='col-lg-6 col-md-12 col-12 outerDiv' style={{ border: "1px solid black", padding: "15px" }}>

                        <div className='row'>
                            <div className='col-12'>
                                <h1 className='text-center'>ToDo List</h1>
                            </div>
                        </div>

                        <div className='row mt-4' >
                            <div className='col-lg-12 d-flex justify-content-evenly'>
                                <input type="text" placeholder='Enter Task' value={Interest} onChange={(e) => setInterest(e.target.value)} className='col-7' />
                                <button type="button" className="btn btn-success col-3" onClick={HandleAdd}>ADD</button>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12'>
                                {
                                    interestList.length === 0 ?
                                        (
                                            <div>
                                                <h5 className='mt-3 text-danger text-center' style={{ border: "1px solid black" }}>No Task Available</h5>
                                            </div>)
                                        :
                                        (
                                            <div className='row d-flex mt-2'>
                                                <ul>
                                                    {
                                                        interestList.map((item, index) => (
                                                            <li key={index} className='mt-2' style={{ listStyle: "none",border:"1px solid black"}}>
                                                                <div className='d-flex align-items-center'>
                                                                <div className='col-8'>
                                                                   <h3 className='ms-4'> {item} </h3>
                                                                </div>

                                                                <div className='col-4'>
                                                                    <button type="button" className="btn btn-danger" onClick={()=>HandleDelete(index)}>Delete</button>
                                                                </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>

                                            </div>
                                        )



                                }






                            </div>


                        </div>
                    </div>



                </div>
            </div>


        </>
    )
}

export default Todo;



