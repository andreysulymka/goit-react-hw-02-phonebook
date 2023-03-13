

export function Filter({value, onChange}){
    return (
        <form action="">
            <label htmlFor="">Find contacts by name
                <input type="text" value={ value} onChange={onChange} />
            </label>
        </form>
    
    )
}