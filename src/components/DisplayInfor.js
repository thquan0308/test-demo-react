import React from "react";
class DisplayInfor extends React.Component {
    render() {
        //destructuring array/oject
        const { age, name } = this.props;
        console.log(this.props)
        //props => propeties
        return (
            <div>
                <div>My name's {name} </div>
                <div>My age's {age}</div>

            </div>

        )
    }
}

export default DisplayInfor