import ChildComp from "./childComp";

function ParentComp() {
   const myCardsData= [
    {name:"Harsh",title:"developer",message:"this is harsh message"},
    {name:"Gourav",title:"cook",message:"this is Gourav message"},
    {name:"Rahul",title:"author",message:"this is Rahul message"},
    {name:"Rohit",title:"doctor",message:"this is Rohit message"},
    {name:"Joker",title:"cook",message:"this is Joker message"},
    {name:"Joy",title:"developer",message:"this is Joy message"},

   ];



    return (
        <>
       {myCardsData.map((oneObj)=> {
        return(
            <ChildComp
             name={oneObj.name}
             message={oneObj.message}
             title={oneObj.title}
            />
        );
       })}
       </>
    );
}

const styles = {
    aboutContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop:'100px',
      marginBottom:'100px',
    },
};
export default ParentComp;