import { useParams } from "react-router-dom";

const OneBlog = () => {
    const { id } = useParams();
    return <h1>One Blog: {id}</h1>;
};

export default OneBlog