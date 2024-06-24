import {TileContext} from "../context/TileContext.tsx";
import {useContext} from "react";

export const useTile = () => {
    const context = useContext(TileContext);
    if (context === undefined) {
        throw new Error("useTile must be used within a TileProvider");
    }
    return context;
}