import R from "./sets.js";

export default function createshape(pointsthatmakeuptheshape, functionality) {
    return  {
        points: pointsthatmakeuptheshape,
        onclick: functionality
    }
}
