import{
  Button,
  flex,
  ListItem,
  UnorderedList,
  Text,
  Input,
  Flex,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Home() {
  const [tasks,setTasks]=useState(["1","2","3"]);
  const [item,setItem]=useState("");

  function removeItem(taskName){
    setTasks(tasks.filter(task=>{
      return task != taskName;
    }))
  }
  function addItem(){
    if(item !="" && !tasks.includes(item)){
      let temp=tasks;
      temp.push(item);
      setTasks(temp)
      setItem("")
    }
  }

  return (
   <Flex 
   justifyContent="center"
   alignItems="center"
   width="100%"
   height="100%"
   flexDirection="column">
     <UnorderedList>
       {tasks.map((task)       =>{
         return (<ListItem key={task.Index}>
           {task}
           <Button
           ml={10}
           onClick={()=>{
             removeItem(task);
           }}>
             Remove Item
           </Button>
         </ListItem>)
       } )}
     </UnorderedList>
     <Input placeholder="Item Name"
     value={item}
     onChange={(e)=>{
       setItem(e.target.value);
     }}>

     </Input>
     <Button onClick={addItem}>Add items</Button>
   </Flex>
  )
}
