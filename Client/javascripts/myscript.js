
const savebtn= document.getElementById('save');
const title=document.getElementById('tittle');
const data=document.getElementById('textbox');

// const handleSubmit=(e)=>{
//     // e.preventDefault();

//      const result={
//            title:title.value,
//            description:data.value
//      }
//      const  removedSpacesText = title.value.split(" ").join("");
//     //  console.log(removedSpacesText.toLowerCase());

//       console.log(result);

//       title.value='';

//       data.value='';

//     //    const response=await fetch('http://localhost:5000/')
//     //    .then
        
// }

function capitalize(str) {
    if (str.length === 0) return ''; // Check for empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}
