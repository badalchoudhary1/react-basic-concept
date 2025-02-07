export default function Form(){
    function handleEventObject(event){
        event.preventDefault()
        console.log("form submitted")
    }
    return(
    
        <form onSubmit={handleEventObject}>
            <input type="text" placeholder="Enter your name" />
            <button>Submit</button> 
        </form>
    
    )
}