import React from "react"
import Detail from "../components/Details"

function Card(props){

    return <div>
            <div className="card">
            <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img"
                src={props.img}
                alt="avatar_img"
            />
            </div>
            <div className="bottom">
                <Detail detailInfo={props.tel}/>
                <Detail detailInfo={props.email}/>


            </div>


        </div>
    </div>





}

export default Card;