interface TestProps{
    Description:string;

}
const TestProps: React.FC<TestProps> = (props) =>{
    return(
        <>
        <h1 title="Hello world">{props.Description}</h1></>
    );
}

export default TestProps;