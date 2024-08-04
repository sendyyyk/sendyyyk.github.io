import CoverPicture from "../../Fragments/ProfilePortofolio/CoverPicture";

const Cover = (props) => {
    const {styleCover} = props

    return (
        <CoverPicture src="cover-picture.png" styleCover={styleCover}/>       
    )
}

export default Cover;
