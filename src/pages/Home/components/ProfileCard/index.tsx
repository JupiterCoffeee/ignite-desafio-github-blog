import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileCardHeader, ProfileCardContainer, ProfileCardContentDiv, ProfileCardPictureDiv, ProfileCardStats } from "./style";

export function ProfileCard() {
    return (
        <ProfileCardContainer>
            <ProfileCardPictureDiv>
                <img src="https://avatars.githubusercontent.com/u/133159511?s=400&u=8c2d2c26840eea3500442ed8f0bdb29f3c40b753&v=4" alt=""/>
            </ProfileCardPictureDiv>
            <ProfileCardContentDiv>
                <ProfileCardHeader>
                    <div>
                        <span>João Fialho</span>
                        <a>
                            GITHUB
                            <ArrowSquareOut weight="bold"/>
                        </a>
                    </div>
                    <div>
                        <p>
                            Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                            Eu viverra massa quam dignissim aenean malesuada suscipit. 
                            Nunc, volutpat pulvinar vel mass.
                        </p>
                    </div>
                </ProfileCardHeader>
                <ProfileCardStats>
                    <span>
                        <GithubLogo weight="fill"/>
                        <p>cameronwll</p>
                    </span>
                    <span>
                        <Buildings weight="fill"/>
                        <p>Rocketseat</p>
                    </span>
                    <span>
                        <Users weight="fill"/>
                        <p>32 seguidores</p>
                    </span>
                </ProfileCardStats>
            </ProfileCardContentDiv>
        </ProfileCardContainer>
    )
}