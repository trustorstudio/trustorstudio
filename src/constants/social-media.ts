import configs from "~/configs";
import images from "~/assets/images"
import { SocialMediaType } from "~/types";


const socialMedias: Array<SocialMediaType> = [
    {
        id: 1,
        name: "Twitter",
        url: configs.socialMedia.twitter,
        image: images.socialMedia.twitter
    },
    {
        id: 2,
        name: "Facebook",
        url: configs.socialMedia.facebook,
        image: images.socialMedia.facebook
    },
    {
        id: 3,
        name: "YouTube",
        url: configs.socialMedia.youtube,
        image: images.socialMedia.youtube
    },
    {
        id: 4,
        name: "LinkedIn",
        url: configs.socialMedia.linkedin,
        image: images.socialMedia.linkedin
    },
    {
        id: 5,
        name: "Instagram",
        url: configs.socialMedia.instagram,
        image: images.socialMedia.instagram
    },
    {
        id: 6,
        name: "Apple Store",
        url: configs.socialMedia.apple,
        image: images.socialMedia.apple
    },
    {
        id: 7,
        name: "Google Play Store",
        url: configs.socialMedia.ggplay,
        image: images.socialMedia.ggplay
    },
    {
        id: 8,
        name: "Github",
        url: configs.socialMedia.github,
        image: images.socialMedia.github
    }
]

export default socialMedias;