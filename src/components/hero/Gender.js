import { IoFemale, IoMale, IoMaleFemale } from "react-icons/io5";

const mapValueToIcon = {
    'Nữ': { icon: IoFemale, color: '#ec49a7' },
    'Nam': { icon: IoMale, color: '#03a3ff' },
    'Không xác định': { icon: IoMaleFemale, color: '' },
}

const Gender = ({ gender }) => {
    const { icon: Icon, color } = mapValueToIcon[gender];
    return <Icon color={color} />
};

export default Gender;