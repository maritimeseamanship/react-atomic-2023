const Company = ({company}) => {
    const {name, catchPhrase} = company;
    return(
        <div>
            <div>COMPANY:</div>
            <div>name: {name}</div>
                <div>catchPhrase: {catchPhrase} </div>
        </div>
    );
};
export {Company};