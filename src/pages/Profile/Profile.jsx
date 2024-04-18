import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ContainerProfile,
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileThoughts,
  ProfileUser,
} from "./ProfileStyled";

import userImg from "../../assets/user.png";
import Card from "../../components/Cards/Card";
import { getAllThoughtsByUser } from "../../services/postsServices";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(UserContext);
  const [thoughts, setThoughts] = useState([]);

  async function findAllThoughtsByUser() {
    const thoughtsResponse = await getAllThoughtsByUser();
    setThoughts(thoughtsResponse.data.results);
  }

  useEffect(() => {
    findAllThoughtsByUser();
  }, []);

  return (
    <>
      <ContainerProfile>
        <ProfileHeader>
          <ProfileIconEdit>
            <i className="bi bi-pencil-square"></i>
          </ProfileIconEdit>
          <ProfileBackground></ProfileBackground>

          <ProfileUser>
            <ProfileAvatar src={userImg} />
            <h2>{user.name}</h2>
            <h3>@{user.username}</h3>
          </ProfileUser>

          <ProfileActions>
            <Link to="/manage-thoughts/add/thought">
              <ProfileIconAdd>
                <i className="bi bi-plus-circle"></i>
              </ProfileIconAdd>
            </Link>
          </ProfileActions>
        </ProfileHeader>
        <ProfileThoughts>
          {thoughts.map((thought) => (
            <Card
                  key={thought.id}
                  id={thought.id}
              username={thought.username}
              createdAt={thought.createdAt}
              title={thought.title}
              text={thought.text}
              likes={thought.likes}
                  comments={thought.comments}
                  actions={true}
            />
          ))}
        </ProfileThoughts>
        {thoughts.length === 0 ? (
          <h2 className="h2">Você ainda não fez Pensamentos...</h2>
        ) : null}
      </ContainerProfile>
    </>
  );
}
