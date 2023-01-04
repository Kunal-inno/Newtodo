import React from 'react'

const Time = () => {


    var showdate=new Date();
    var display=showdate.getHours()+":"+showdate.getMinutes();
    return(

        <div>

            <p>{display}</p>
        </div>
    )

}
// .getHours(
export default Time;