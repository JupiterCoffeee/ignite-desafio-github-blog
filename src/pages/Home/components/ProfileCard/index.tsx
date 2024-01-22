import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileCardHeader, ProfileCardContainer, ProfileCardContentDiv, ProfileCardPictureDiv, ProfileCardStats } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

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
    const apiUrl = 'https://api.github.com';

    const fetchUserInfo = async () => {
        const username = 'JupiterCoffee';
        try {
            const response = await axios.get(`${apiUrl}/users/${username}`)
            const userData = response.data;
            const userInfo: ProfileCardProps = {
                name: userData.name,
                url: userData.html_url,
                picture: userData.avatar_url,
                login: userData.login,
                company: userData.company,
                followers: userData.followers,
                bio: userData.bio,
            }

            setProfile(userInfo)
        } catch (error) {
            console.error('Erro ao buscar usuário:', axios.isAxiosError(error))
        }
    };

    useEffect(() => {
        fetchUserInfo()
    }, [])

    console.log(profile)
      
    return (
        <ProfileCardContainer>
            <ProfileCardPictureDiv>
                <img src={profile.picture} alt=""/>
            </ProfileCardPictureDiv>
            <ProfileCardContentDiv>
                <ProfileCardHeader>
                    <div>
                        <span>João Fialho</span>
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
                        <p>{profile.login}</p>
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