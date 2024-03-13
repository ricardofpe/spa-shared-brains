import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { ContainerProfile, ProfileActions, ProfileAvatar, ProfileBackground, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileUser } from "./ProfileStyled"

import userImg from '../../assets/user.png'

export default function Profile() {

    const {user} = useContext(UserContext)
  return (
   <>
   <ContainerProfile>

   <ProfileHeader>
    <ProfileIconEdit>
        <i className="bi bi-pencil-square">

        </i>
    </ProfileIconEdit>
    <ProfileBackground>

    </ProfileBackground>

    <ProfileUser>

<ProfileAvatar src={userImg}/>
<h2>{user.name}</h2>
<h3>@{user.username}</h3>

    </ProfileUser>

    <ProfileActions>
        <ProfileIconAdd>
            <i className="bi bi-plus-circle"></i>
        </ProfileIconAdd>
    </ProfileActions>
   </ProfileHeader>
      

   </ContainerProfile>
   </>
  )
}
