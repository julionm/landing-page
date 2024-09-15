import { TechStack } from "models/workInfo";
import { memo } from "react";
import { TechStackTag } from "../TechStackTag";

type TechStackListProps = {
    items: TechStack[]
}

export const TechStackList = memo(
    function ({ items }: TechStackListProps) {
        return (
            <>
                {
                    items.map(tech => <TechStackTag key={tech} techStack={tech} />)
                }
            </>
        );
    }
);