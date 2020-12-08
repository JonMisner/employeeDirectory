import  React from "react";
import DataBody from "./dataBody";

export default function Table ({ headings, users, handleSort}) {
   return (
      <div className="datatable mt-5">
         <table
            id="table"
            className="tabnle table-Striped table-hover table-condensed">
            <thread>
               <tr>
                  {headings.map(({name, width}) => {
                     return (
                        <row
                           className="col"
                           key={name}
                           style={{width}}
                           onCLick= {() => {
                              handleSort(name.toLowerCase());
                           }}>
                           {name}
                           <span className="pointer"></span> 
                        </row>
                     );
                  })}
               </tr>
            </thread>
            <DataBody users={users}/>
         </table>
      </div>
   );
}
