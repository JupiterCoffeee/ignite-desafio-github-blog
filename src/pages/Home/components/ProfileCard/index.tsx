import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../../../hooks/useFetch";
import { IssuesContext } from "../../../../context/IssueContext";
import {
  ProfileCardHeader,
  ProfileCardContainer,
  ProfileCardContentDiv,
  ProfileCardPictureDiv,
  ProfileCardStats,
} from "./style";

interface ProfileCardProps {
  name: string;
  url: string;
  login: string;
  picture: string;
  company: string;
  followers: number;
  bio: string;
}

export function ProfileCard() {
  // Obter o nome de usuário do contexto
  const { username } = useContext(IssuesContext);
  // Estado para armazenar os dados do perfil
  const [profile, setProfile] = useState<ProfileCardProps>({
    name: "",
    url: "",
    picture: "",
    login: "",
    company: "",
    followers: 0,
    bio: "",
  });

  // Efeito para buscar informações do perfil ao montar o componente
  useEffect(() => {
    // Função assíncrona para buscar informações do usuário
    const fetchUserInfo = async (username: string) => {
      try {
        // Chamar a função de fetch para obter dados do usuário
        const response = await fetchData({ url: `users/${username}` });

        // Extrair dados da resposta
        const userData = response.data;
        // Criar objeto com as informações do perfil
        const userInfo: ProfileCardProps = {
          bio: userData.bio,
          company: userData.company,
          followers: userData.followers,
          login: userData.login,
          name: userData.name,
          picture: userData.avatar_url,
          url: userData.html_url,
        };

        // Atualizar o estado com as informações do perfil
        setProfile(userInfo);
      } catch (error) {
        // Lidar com erros durante a busca do perfil
        if (error instanceof Error) {
          console.error("Erro ao buscar usuário:", error.message);
        } else {
          console.error("Erro desconhecido ao buscar usuário:", error);
        }
      }
    };

    fetchUserInfo(username);
  }, [username]);

  return (
    <ProfileCardContainer>
      <ProfileCardPictureDiv>
        <img src={profile.picture} alt="" />
      </ProfileCardPictureDiv>
      <ProfileCardContentDiv>
        <ProfileCardHeader>
          <div>
            <span>{profile.login}</span>
            <a href={profile.url}>
              GITHUB
              <ArrowSquareOut weight="bold" />
            </a>
          </div>
          <div> 
            <p>{profile.bio}</p>
          </div>
        </ProfileCardHeader>
        <ProfileCardStats>
          <span>
            <GithubLogo weight="fill" />
            <p>{profile.name}</p>
          </span>
          <span>
            <Buildings weight="fill" />
            <p>{profile.company}</p>
          </span>
          <span>
            <Users weight="fill" />
            <p>{profile.followers} seguidores</p>
          </span>
        </ProfileCardStats>
      </ProfileCardContentDiv>
    </ProfileCardContainer>
  );
}
