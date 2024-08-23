import images from "~/assets/images";
import configs from "~/configs";
import { ViewerType } from "~/types";

const viewers: Array<ViewerType> = [
    {
        id: 1,
        image: images.viewer.viewer01,
        video: configs.viewers.viewer01
    },
    {
        id: 2,
        image: images.viewer.viewer02,
        video: configs.viewers.viewer02
    },
    {
        id: 3,
        image: images.viewer.viewer03,
        video: configs.viewers.viewer03
    },
    {
        id: 4,
        image: images.viewer.viewer04,
        video: configs.viewers.viewer04
    },
    {
        id: 5,
        image: images.viewer.viewer05,
        video: configs.viewers.viewer05
    }
]

export default viewers;