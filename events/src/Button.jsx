export default function Button(){

    function handleClick(){
        console.log("Button clicked")
    }
    function handleMouseOver(){
        console.log("Mouse over")
    }
    function handleDbclick(){
        console.log("Double clicked")
    }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quas unde, eveniet culpa, earum quisquam debitis expedita eius accusantium blanditiis explicabo labore libero consequatur eos quos repellat facilis soluta cupiditate!

            </p>
            <button onDoubleClick={handleDbclick}>double click</button>
        </div>
    )
}