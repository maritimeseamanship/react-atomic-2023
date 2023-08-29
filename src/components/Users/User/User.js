import {Company} from "../Company/Company";
import {UserDetails} from "../UserDetails/UserDetails";
import {UserAddress} from "../UserAddress/UserAddress";
const User= ({user}) => {
       const {id, name, username, email, phone, website, address, company} = user;
    return(
        <div>
            <UserDetails data={{id, name, username, email, phone, website}}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </div>
    );
};
export {User};