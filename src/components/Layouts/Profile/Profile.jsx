import ProfilePicture from "../../Fragments/ProfilePortofolio/ProfilePicture";

const Profile = (props) => {
    const {styleProfile, styleProfile2, profileBtn, top} = props;

    return (
        <ProfilePicture src="profile-picture.png" styleProfile={styleProfile} styleProfile2={styleProfile2} profileBtn={profileBtn} top={top}/>
    )
}

export default Profile;
