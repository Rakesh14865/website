function Students(props){
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent?"yes":"no"}</p>
        </div>
        
    );
}
export default Students