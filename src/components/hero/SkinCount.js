import { HStack } from "@chakra-ui/react";
import { AiOutlineSkin } from "react-icons/ai";

const SkinCount = ({ count }) => {
    return (
        <HStack gap={0}>
            <AiOutlineSkin />
            <span>:{count}</span>
        </HStack>
    );
};

export default SkinCount;