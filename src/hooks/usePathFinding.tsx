import {PathFindingContext} from "../context/PathFindingContext.tsx";
import {useContext} from "react";

export const usePathFinding = () => {
    const context = useContext(PathFindingContext);
    if (context === undefined) {
        throw new Error("usePathFinding must be used within a PathFindingProvider");
    }
    return context;
}