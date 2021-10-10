import useJsonFetch from "./useJsonFetch";
import PropTypes from 'prop-types';

export default function Examples({endpoint}) {
    const [data, error, loading] = useJsonFetch(`http://localhost:7070/${endpoint}`);
    //console.log(error);
     return (
         <div>
             {(loading && 'Loading...') || (data && data.status) || (error && 'Ошибка!')}
         </div>
    );
}

Examples.propTypes = {
    endpoint: PropTypes.string.isRequired,
}