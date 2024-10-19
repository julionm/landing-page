import { memo } from "react";
import { Tag } from "../Tag";

import "./styles.css";

type TagListProps = {
    items: string[]
}

export const TagList = memo(
    function ({ items }: TagListProps) {
        return (
            <div className="tag-list">
                {
                    items.map(item => <Tag key={item} text={item} />)
                }
            </div>
        );
    }
);