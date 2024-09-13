// import React, { useState } from "react";
// import {useImmer} from "use-immer";
// import data from "../data";

// export default function UseImmerIntroduce(){
// // use immer sẽ tự tham chiếu đến object hoặc array để user có thể thay đổi mà không cần sao chép hoặc tạo bản sao nông để sửa đổi, tức useImmer sẽ thay đổi trực tiếp đến các state
//     const [post, setPost] = useImmer(data);
//     function handle(event){
//         const indexId = parseInt(event.target.id);
//         setPost(draft=>{
//             const item = draft.find((target)=>target.id === indexId);
//             if(item){
//                 item.seen = !item.seen;
//             }
//         })
//     }
//     return (
//         <section >
//             {post.map((item, index)=>{
//                 return (
//                     <div key={index}>
//                         <h3 >{item.title}</h3>
//                         <p>{item.seen ? item.children : "Click button to see..."}</p>
//                         <button onClick={handle} id={item.id}>{!item.seen ? "Show post" : "Hide post"}</button>
//                     </div>
//                 )
//             })}
//         </section>
//     )
// }

import React, { useState } from "react";
import {useImmer} from "use-immer";
import data from "../data";
import "./hookImmer.scss"


export default function UseImmerIntroduce(){
// use immer sẽ tự tham chiếu đến object hoặc array để user có thể thay đổi mà không cần sao chép hoặc tạo bản sao nông để sửa đổi, tức useImmer sẽ thay đổi trực tiếp đến các state
    const [post, setPost] = useImmer(data);
    function handle(event){
        const indexId = parseInt(event.target.id)-1;
        const item = post.find((target)=>target.id - 1 === indexId);
        setPost(post=>{
            post[indexId].seen = !post[indexId].seen
        })
    }
    return (
        <section >
            {post.map((item, index)=>{
                return (
                    <div className="post" key={index}>
                        <h3 >{item.title}</h3>
                        <p>{item.seen ? item.children : "Click button to see..."}</p>
                        <button onClick={handle} id={item.id}>{!item.seen ? "Show post" : "Hide post"}</button>
                    </div>
                )
            })}
        </section>
    )
}