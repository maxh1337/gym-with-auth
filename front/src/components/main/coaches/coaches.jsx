import Carousel from "../carousel/carousel";
import styles from "./coaches.module.scss";
import {useMutation, useQuery} from "react-query";
import {$api} from "../../../api/api";
import {useState} from "react";
import trash from '../../../images/trash.svg'
import {useAuth} from "../../../hooks/useAuth";

const Coaches = () => {
    const [coaches, setCoaches] = useState(1)
    const {isAuth, setIsAuth} = useAuth()
    const user = JSON.parse(localStorage.getItem('isCurrentUserAdmin'))
    console.log(user)
    const {isSuccess, isLoading, data, refetch, error} = useQuery(
        [`get all trainers`],
        () =>
            $api({
                url: `/trainers`,
            }),
        {
            refetchOnWindowFocus: false,
        },
        {
            onSuccess(data) {
                setCoaches(data.length)
            }
        }
    )


    // const {mutate: deleteCoach, mutateError} = useMutation(
    //     'Delete 1 coach',
    //     item =>
    //         $api({
    //             url: `/trainers/${item}`,
    //             type: 'DELETE',
    //         }),
    //     {
    //         onSuccess(data) {
    //             console.log('Успешно удалено')
    //             refetch()
    //         },
    //     },
    // )
    //
    // const handleDeleteClick = item => {
    //     deleteCoach(item)
    // }


    const coach = [
        {
            name: "Вы не загрузили тренеров",
            age: 999,
            awards: "Или что то случилось с сервером",
            photo:
                "https://www.meme-arsenal.com/memes/393077740a37fa314f0a8d5b8747f737.jpg",
        },
    ];
    return (
        <Carousel isLoading={isLoading} isSuccess={isSuccess} pages={coaches}>
            {error && <p>{error}</p>}
            {isSuccess && isLoading === false ? (
                data.map((coach, idx) => {
                    return (
                        <div className={styles.coachCard} key={idx}>
                            <div>
                                {/*{(isAuth && user === true) &&*/}
                                {/*    <button onClick={() => handleDeleteClick(coach._id)}*/}
                                {/*            style={{*/}
                                {/*                backgroundColor: 'transparent',*/}
                                {/*                border: 'none',*/}
                                {/*                position: 'absolute',*/}
                                {/*                right: '0'*/}
                                {/*            }}>*/}
                                {/*        <img src={trash} alt="trash button" height={30} width={30}/>*/}
                                {/*    </button>}*/}
                                <img alt={coach.name} src={coach.photo}/>
                            </div>
                            <div>
                                <h2>{coach.name}</h2>
                                <h3>{coach.age} years old</h3>
                                <h4>{coach.awards}</h4>
                            </div>
                        </div>
                    );
                })
            ) : (
                isSuccess === false && <p style={{margin: '0 auto', fontSize: '20px'}}>Ничего не найдено</p>
            )
            }

        </Carousel>
    );
};

export default Coaches;
