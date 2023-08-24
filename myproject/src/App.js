
import React from 'react';
import Props from './Props';
import data from './Data';
import Pager from './Pager';
import "../src/Css/Style.css";
import Carousel from './Carousel';

// const allData=(values)=>{
//     return(
//         <>
//         <Props 
//                    imgsrc={values.imgsrc}
//                    title={values.title}
//                    text= {values.text}
//                    btn={values.btn}
//                 />
        
//         </>
//     )
// }

   

const App=() => {
    return(
        <>
         <Carousel />
        <div className='container mt-5'>
            <div className='row'>
           
            
                {/* 
                before using MAP method to folloe this method
                <Props 
                   imgsrc={values.imgsrc}
                   title={values.title}
                   text= {values.text}
                   btn={values.btn}
                />
                <Props 
                   imgsrc={data[1].imgsrc}
                   title={data[1].title}
                   text= {data[1].text}
                   btn={data[1].btn}
                />
                <Props 
                   imgsrc={data[2].imgsrc}
                   title={data[2].title}
                   text= {data[2].text}
                   btn={data[2].btn}
                />
                <Props 
                   imgsrc={data[3].imgsrc}
                   title={data[3].title}
                   text= {data[3].text}
                   btn={data[3].btn}
                /> */}
               
                {/* 
                to not use array of object to use this method
                <Props 
                    imgsrc="./images/img3.jpg"
                    title="Dell book"
                    text="Some quick example text to build on the card title and make up the bulk of the card's content"
                    btn="Read more"
                />  */}
                {/* {data.map(allData)} */}
                {data.map((values)=>{
                return(
                    <>
                    <Props 
                    key={values.id}
                    id={values.id}
                    imgsrc={values.imgsrc}
                    title={values.title}
                    text= {values.text}
                    btn={values.btn}
                 />
                 
                    </>

                )
               
                   
                

            })}
            
                
                
            </div>
            </div>
        

        </>

    )  
}

export default App;
