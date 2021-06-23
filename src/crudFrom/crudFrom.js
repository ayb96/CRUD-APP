import React from 'react'

const CrudFrom = (props) => {
    
    

    
        return(
            <div>
                <form onSubmit={props.handelSubmit}>
                    <input type = "text" placeholder = "any number" id = "name" value={props.current} onChange={props.handelChange}/>
                    <input type = "submit" value = "submit" />
                </form>
            </div>
    
        );
    
    
}

export default CrudFrom