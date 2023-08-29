const Company = ({company}) => {
    const {name, catchPhrase, bs} = company;
    return(
        <div>
            <div>COMPANY:</div>
            <div>name: {name}</div>
                <div>catchPhrase: {catchPhrase} </div>
            <div>bs: {bs}</div>
        </div>
    );
};
export {Company};