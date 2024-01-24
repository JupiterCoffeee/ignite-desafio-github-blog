import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileCardHeader, ProfileCardContainer, ProfileCardContentDiv, ProfileCardPictureDiv, ProfileCardStats } from "./style";
import { useEffect, useState } from "react";
import { api, token } from "../../../../lib/axios";

interface ProfileCardProps {
    name: string;
    url: string;
    login: string;
    picture: string
    company: string;
    followers: number;
    bio: string;
}

export function ProfileCard() {
    const [profile, setProfile] = useState<ProfileCardProps>({
        name: '',
        url: '',
        picture: '',
        login: '',
        company: '',
        followers: 0,
        bio: '',
    });

    useEffect(() => {
        const fetchUserInfo = async (username: string) => {
            try {
    
                const response = await api.get(`users/${username}`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
    
                const userData = response.data;
                const userInfo: ProfileCardProps = {
                    bio: userData.bio,
                    company: userData.company,
                    followers: userData.followers,
                    login: userData.login,
                    name: userData.name,
                    picture: userData.avatar_url,
                    url: userData.html_url,
                }
    
                setProfile(userInfo)
            } catch (error) {
                console.error('Erro ao buscar usuário:', error.message)
            }
        };

        fetchUserInfo('JupiterCoffeee')
    }, [])
      
    return (
        <ProfileCardContainer>
            <ProfileCardPictureDiv>
                <img src={profile.picture} alt=""/>
            </ProfileCardPictureDiv>
            <ProfileCardContentDiv>
                <ProfileCardHeader>
                    <div>
                        <span>{profile.login}</span>
                        <a href={profile.url}>
                            GITHUB
                            <ArrowSquareOut weight="bold"/>
                        </a>
                    </div>
                    <div>
                        <p>
                            {profile.bio}
                        </p>
                    </div>
                </ProfileCardHeader>
                <ProfileCardStats>
                    <span>
                        <GithubLogo weight="fill"/>
                        <p>{profile.name}</p>
                    </span>
                    <span>
                        <Buildings weight="fill"/>
                        <p>{profile.company}</p>
                    </span>
                    <span>
                        <Users weight="fill"/>
                        <p>{profile.followers} seguidores</p>
                    </span>
                </ProfileCardStats>
            </ProfileCardContentDiv>
        </ProfileCardContainer>
    )
}