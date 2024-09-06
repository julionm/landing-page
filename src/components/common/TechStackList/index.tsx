import { TechStack } from "models/workInfo";
import { techStackToIcon } from "models/workInfo";
import { memo } from "react";

type TechStackListProps = {
    items: TechStack[]
}

export const TechStackList = memo(
    function ({ items }: TechStackListProps) {
        return (
            <>
                {
                    items.map(tech => {
                        const IconComponent = techStackToIcon[tech];
            
                        return (
                            <div key={tech} className="icon-container">
                                <IconComponent />
                            </div>
                        );
                    })
                }
            </>
        );
    }
);