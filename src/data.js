import { IoGameController } from "react-icons/io5";
import { FaQq, FaAngellist, FaBalanceScaleRight, FaAlignLeft } from "react-icons/fa";

export const categories = [
    { id: 1, name: "Games",iconSrc: <IoGameController fontSize={30}/>},
    { id: 2, name: "Stories", iconSrc: <FaQq fontSize={30}/>},
    { id: 3, name: "Stategies", iconSrc: <FaBalanceScaleRight fontSize={30}/>},
    { id: 4, name: "Motivation", iconSrc: <FaAngellist fontSize={30}/>},
    { id: 5, name: "Riddles", iconSrc: <FaAlignLeft fontSize={30}/>}
];