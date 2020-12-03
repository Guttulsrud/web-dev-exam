import React, {useContext} from 'react';
import PsLoading from '../../Loading';
import Table from 'react-bootstrap/Table';
import {EntityContext} from '../../../context/EntityContext';
import {TableImage} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import PropTypes from 'prop-types';

const GamesList = ({handleEdit}) => {
    const {entities, loading} = useContext(EntityContext);

    const generateGames = () => {
        return entities[0].map((game, key) => (        
            <tr  className='text-left' key={key} onClick={() => handleEdit(game)}>
                <td style={{verticalAlign: "middle"}}>{game.title}</td>
                <td style={{verticalAlign: "middle"}}>{game.category}</td>

                <td className={'text-center'}><TableImage src={game.gameBoxImage} alt="gamebox"/></td>
                <td style={{verticalAlign: "middle"}} className={'text-center'}>{game.isFeatured ?
                    <FontAwesomeIcon icon={faCheckCircle} className={"my-auto"} color={'#58a458'} size={'2x'}/> :
                    <FontAwesomeIcon icon={faTimesCircle} color={'#9f3333'} size={'2x'}/>}</td>
            </tr>
        ));
    };

    return (
        <React.Fragment>
            {
                loading ? <PsLoading/> :
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th className='text-left'>Title</th>
                            <th className='text-left'>Category</th>
                            <th className='text-left'>Box Art</th>
                            <th className='text-left'>Featured</th>
                        </tr>
                        </thead>
                        <tbody>
                        {generateGames()}
                        </tbody>
                    </Table>
            }
        </React.Fragment>
    );
};

GamesList.propTypes = {
    handleEdit: PropTypes.func.isRequired
}

export default GamesList;