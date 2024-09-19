import { memo } from "react";
import { Tag } from "../Tag";

type TagListProps = {
    items: string[]
}

export const TagList = memo(
    function ({ items }: TagListProps) {
        return (
            <>
                {
                    items.map(item => <Tag key={item} text={item} />)
                }
            </>
        );
    }
);